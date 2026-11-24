import { useEffect, useState, type ReactNode } from "react"
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../src/index"

type Density = "compact" | "default" | "comfortable"

const densityPresets: Record<Density, [string, string, string]> = {
  compact: ["24px", "28px", "32px"],
  default: ["28px", "32px", "40px"],
  comfortable: ["32px", "36px", "44px"],
}

const colorGroups: { title: string; names: string[] }[] = [
  {
    title: "表面",
    names: ["--color-background", "--color-surface", "--color-surface-2", "--color-surface-3"],
  },
  { title: "文字", names: ["--color-foreground", "--color-muted", "--color-faint"] },
  { title: "描边", names: ["--color-border", "--color-border-strong"] },
  {
    title: "主色",
    names: [
      "--color-primary",
      "--color-primary-hover",
      "--color-primary-active",
      "--color-primary-soft",
    ],
  },
  {
    title: "语义",
    names: [
      "--color-success",
      "--color-success-soft",
      "--color-warning",
      "--color-warning-soft",
      "--color-danger",
      "--color-danger-soft",
      "--color-info",
      "--color-info-soft",
    ],
  },
]

function readToken(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

function Swatch({ name }: { name: string }) {
  const [value, setValue] = useState("")

  useEffect(() => {
    const id = requestAnimationFrame(() => setValue(readToken(name)))
    return () => cancelAnimationFrame(id)
  }, [name])

  return (
    <div className="swatch">
      <div className="chip" style={{ background: `var(${name})` }} />
      <div className="meta">
        <div className="name">{name}</div>
        <div className="value">{value || "—"}</div>
      </div>
    </div>
  )
}

function Section({
  title,
  note,
  children,
}: {
  title: string
  note?: string
  children: ReactNode
}) {
  return (
    <section>
      <h2 className="sec-title">{title}</h2>
      {note ? <p className="sec-note">{note}</p> : null}
      {children}
    </section>
  )
}

export function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [density, setDensity] = useState<Density>("default")
  const [revision, setRevision] = useState(0)
  const [progress, setProgress] = useState(46)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    setRevision((n) => n + 1)
  }, [theme])

  useEffect(() => {
    const [sm, md, lg] = densityPresets[density]
    document.documentElement.style.setProperty("--control-h-sm", sm)
    document.documentElement.style.setProperty("--control-h", md)
    document.documentElement.style.setProperty("--control-h-lg", lg)
    setRevision((n) => n + 1)
  }, [density])

  return (
    <>
      <div className="topbar">
        <h1>xwang-ui · 组件与 token 预览</h1>
        <span className="spacer" />
        <div className="seg" role="group" aria-label="主题">
          <button aria-pressed={theme === "light"} onClick={() => setTheme("light")}>
            亮色
          </button>
          <button aria-pressed={theme === "dark"} onClick={() => setTheme("dark")}>
            暗色
          </button>
        </div>
        <div className="seg" role="group" aria-label="密度">
          <button aria-pressed={density === "compact"} onClick={() => setDensity("compact")}>
            紧凑
          </button>
          <button aria-pressed={density === "default"} onClick={() => setDensity("default")}>
            默认
          </button>
          <button aria-pressed={density === "comfortable"} onClick={() => setDensity("comfortable")}>
            宽松
          </button>
        </div>
      </div>

      <div className="page">
        <Section
          title="颜色 tokens"
          note="全部定义在 src/tokens.css，亮暗两套同名变量。下面显示的是浏览器解析后的实际取值。"
        >
          <div className="stack" key={`colors-${revision}`}>
            {colorGroups.map((group) => (
              <div key={group.title}>
                <p className="panel-label">{group.title}</p>
                <div className="grid cols-4">
                  {group.names.map((name) => (
                    <Swatch key={name} name={name} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="尺度 tokens" note="圆角、阴影、控件高度、动效时长都收敛成变量，改一处全体生效。">
          <div className="grid cols-4">
            {["--radius-control", "--radius-card", "--radius-panel", "--radius-dialog"].map((name) => (
              <div key={name} className="panel flat">
                <div
                  className="tile"
                  style={{ borderRadius: `var(${name})`, background: "var(--color-primary-soft)" }}
                />
                <div className="swatch" style={{ marginTop: 10, border: 0 }}>
                  <div className="name">{name}</div>
                  <div className="value">{readToken(name)}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid cols-2" style={{ marginTop: 12 }}>
            <div className="panel flat">
              <div className="tile" style={{ boxShadow: "var(--shadow-card)", background: "var(--color-surface)" }} />
              <div className="swatch" style={{ marginTop: 10, border: 0 }}>
                <div className="name">--shadow-card</div>
                <div className="value">卡片 / 浮层基线</div>
              </div>
            </div>
            <div className="panel flat">
              <div className="tile" style={{ boxShadow: "var(--shadow-dialog)", background: "var(--color-surface)" }} />
              <div className="swatch" style={{ marginTop: 10, border: 0 }}>
                <div className="name">--shadow-dialog</div>
                <div className="value">弹窗 / 下拉</div>
              </div>
            </div>
          </div>

          <div className="grid cols-3" style={{ marginTop: 12 }}>
            {["--control-h-sm", "--control-h", "--control-h-lg"].map((name) => (
              <div key={name} className="panel flat">
                <div
                  className="tile"
                  style={{ height: `var(${name})`, background: "var(--color-surface-3)" }}
                />
                <div className="swatch" style={{ marginTop: 10, border: 0 }}>
                  <div className="name">{name}</div>
                  <div className="value">{readToken(name)}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Button" note="5 种 variant × 4 种 size。主按钮 hover 加阴影、按下下沉 1px；其余变体只统一时长，避免工具栏抖动。">
          <div className="panel">
            <p className="panel-label">variant</p>
            <div className="row">
              <Button>主操作</Button>
              <Button variant="secondary">次要</Button>
              <Button variant="ghost">幽灵</Button>
              <Button variant="danger">危险</Button>
              <Button variant="link">链接</Button>
              <Button disabled>禁用</Button>
            </div>
            <div className="divider" />
            <p className="panel-label">size</p>
            <div className="row" style={{ alignItems: "center" }}>
              <Button size="sm">小</Button>
              <Button>中</Button>
              <Button size="lg">大</Button>
              <Button size="icon" aria-label="图标按钮">
                +
              </Button>
              <Button size="icon-sm" aria-label="小图标按钮">
                +
              </Button>
            </div>
          </div>
        </Section>

        <Section title="Badge" note="6 种语义。软背景 + 同色文字，没有描边。">
          <div className="panel">
            <div className="row">
              <Badge>neutral</Badge>
              <Badge variant="primary">primary</Badge>
              <Badge variant="info">info</Badge>
              <Badge variant="success">success</Badge>
              <Badge variant="warning">warning</Badge>
              <Badge variant="danger">danger</Badge>
            </div>
          </div>
        </Section>

        <Section title="表单控件" note="Input / Select / Checkbox / Switch / Label。聚焦用 Tab 键可以看到焦点环。">
          <div className="grid cols-2">
            <div className="panel stack">
              <div className="field">
                <Label htmlFor="demo-input">输入框</Label>
                <Input id="demo-input" placeholder="请输入内容" />
              </div>
              <div className="field">
                <Label htmlFor="demo-invalid">校验失败</Label>
                <Input id="demo-invalid" aria-invalid defaultValue="不合法的值" />
              </div>
              <div className="field">
                <Label htmlFor="demo-disabled">禁用</Label>
                <Input id="demo-disabled" disabled defaultValue="不可编辑" />
              </div>
              <div className="field">
                <Label>下拉选择</Label>
                <Select defaultValue="a">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">选项 A</SelectItem>
                    <SelectItem value="b">选项 B</SelectItem>
                    <SelectItem value="c">选项 C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="panel stack">
              <div className="row">
                <Checkbox id="cb1" defaultChecked />
                <Label htmlFor="cb1">已勾选</Label>
              </div>
              <div className="row">
                <Checkbox id="cb2" />
                <Label htmlFor="cb2">未勾选</Label>
              </div>
              <div className="row">
                <Checkbox id="cb3" disabled defaultChecked />
                <Label htmlFor="cb3">禁用</Label>
              </div>
              <div className="divider" />
              <div className="row">
                <Switch id="sw1" defaultChecked />
                <Label htmlFor="sw1">开关（开）</Label>
              </div>
              <div className="row">
                <Switch id="sw2" />
                <Label htmlFor="sw2">开关（关）</Label>
              </div>
            </div>
          </div>
        </Section>

        <Section title="进度与标签页">
          <div className="grid cols-2">
            <div className="panel stack">
              <p className="panel-label">Progress</p>
              <Progress value={progress} />
              <Progress value={88} indicatorClassName="bg-success" />
              <Progress value={30} indicatorClassName="bg-warning" />
              <Button size="sm" variant="secondary" onClick={() => setProgress((n) => (n >= 90 ? 12 : n + 24))}>
                推进一格
              </Button>
            </div>
            <div className="panel">
              <p className="panel-label">Tabs</p>
              <Tabs defaultValue="one">
                <TabsList>
                  <TabsTrigger value="one">概览</TabsTrigger>
                  <TabsTrigger value="two">详情</TabsTrigger>
                  <TabsTrigger value="three">设置</TabsTrigger>
                </TabsList>
                <TabsContent value="one">概览内容</TabsContent>
                <TabsContent value="two">详情内容</TabsContent>
                <TabsContent value="three">设置内容</TabsContent>
              </Tabs>
            </div>
          </div>
        </Section>

        <Section title="浮层" note="Dialog / Popover / Dropdown 统一 fade + zoom（tw-animate-css），关闭时反向播放，Radix 会延迟卸载等动画播完。">
          <div className="panel">
            <div className="row">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary">打开弹窗</Button>
                </DialogTrigger>
                <DialogContent showClose>
                  <DialogHeader>
                    <DialogTitle>确认操作</DialogTitle>
                    <DialogDescription>这是一个示例弹窗，用于检查遮罩颜色、圆角与阴影。</DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="secondary">取消</Button>
                    <Button>确定</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="secondary">Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <p style={{ margin: 0, fontSize: 13 }}>浮层内容，用来检查边距与阴影层级。</p>
                </PopoverContent>
              </Popover>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary">下拉菜单</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuLabel>操作</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>重命名</DropdownMenuItem>
                  <DropdownMenuItem>复制链接</DropdownMenuItem>
                  <DropdownMenuItem variant="destructive">删除</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </Section>

        <Section title="Card" note="默认不动（静态容器大量使用）；只有 interactive 的卡片才会 hover 抬升。">
          <div className="grid cols-2">
            <Card>
              <CardHeader>
                <CardTitle>卡片标题</CardTitle>
              </CardHeader>
              <CardDescription>静态卡片，鼠标划过没有反应，用于表单区、详情面板。</CardDescription>
              <CardContent>
                <Progress value={62} />
              </CardContent>
              <CardFooter>
                <span>更新于 17:52</span>
                <Button size="sm">查看</Button>
              </CardFooter>
            </Card>
            <Card interactive>
              <CardHeader>
                <CardTitle>可交互卡片</CardTitle>
              </CardHeader>
              <CardDescription>
                传了 <code>interactive</code>：hover 抬升 2px、阴影加深、边框转主色，180ms 缓出。
              </CardDescription>
              <CardContent>
                <p style={{ margin: 0, fontSize: 13, color: "var(--color-muted)" }}>
                  用于可以点开进入下一层的列表项。两套卡片的内部节奏保持一致。
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section title="本轮收敛的副本" note="四个应用原来各存一份的取值，现在只剩公共包一处。">
          <div className="panel">
            <ul className="issues">
              <li>
                遮罩色收敛成 <code>--color-overlay</code>（亮 48% / 暗 64%）：Dialog 不再硬编码，
                media-dedupe 与 video_cut 各自定义的值已删除。
              </li>
              <li>media-dedupe 的 60 行 <code>@theme</code> 全量副本已删除，只留 font-face 与窗口布局。</li>
              <li>
                video_cut 的滚动条与遮罩覆盖已删除，滚动条统一由 <code>base.css</code> 提供。
              </li>
              <li>
                video_library 的兼容别名层删掉 13 个无人引用的变量，其余标注 deprecated，按页面分批替换。
              </li>
            </ul>
          </div>
        </Section>

        <Section title="本轮完成的动效与状态反馈" note="动效 token 从「定义了没人用」变成组件统一引用，改一处全体生效。">
          <div className="panel">
            <ul className="issues">
              <li>
                浮层动画真正生效：装了 <code>tw-animate-css</code>，Dialog / Popover / Dropdown（含子菜单）
                统一 fade + zoom，关闭时反向播放。
              </li>
              <li>
                <code>--duration-*</code> 经 <code>--transition-duration-*</code> 命名空间接进 Tailwind，
                组件里可以写 <code>duration-base ease-standard</code>；<code>--ease-out</code> 刻意不映射，避免改掉内置行为。
              </li>
              <li>
                Button 主按钮补 hover 阴影与按下 1px 下沉；Input / Select 的聚焦环改成 180ms 渐显，不再硬跳。
              </li>
              <li>
                Card 新增 <code>interactive</code> 变体（默认不动），配套新增 <code>--shadow-card-hover</code>。
              </li>
              <li>
                表格默认 <code>tabular-nums</code>，<code>--ring-width</code> / <code>--ring-offset</code>
                这两个没人引用的半成品 token 已删除。
              </li>
            </ul>
          </div>
        </Section>

        <Section title="留给下一步" note="这些不阻塞手感统一，属于清理与迁移。">
          <div className="panel">
            <ul className="issues">
              <li>
                <code>SelectContent</code> 的下拉还没有动画，本轮只覆盖了 Dialog / Popover / Dropdown。
              </li>
              <li>
                video_library 的 <code>.video-card:hover</code> 仍自己实现抬升，与 <code>interactive</code> 两套并存，
                待单独一轮迁移。
              </li>
              <li>
                video_library 的兼容别名层还有约 212 处引用，按页面分批替换后整块删除。
              </li>
            </ul>
          </div>
        </Section>
      </div>
    </>
  )
}
