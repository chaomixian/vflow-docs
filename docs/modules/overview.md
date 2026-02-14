---
sidebar_position: 1
---

# 模块参考

vFlow 提供了丰富的模块库，用于构建各种自动化工作流。

## 模块分类概览

### Core - 核心模块

基础的系统操作模块。

| 模块 | 功能描述 |
|------|----------|
| CorePressKey | 按键操作 |
| CoreInputText | 文本输入 |
| CoreTouchReplay | 触摸回放 |
| CoreScreenCapture | 屏幕截图 |
| CoreSetClipboard | 设置剪贴板 |
| CoreGetClipboard | 获取剪贴板 |
| CoreWakeScreen | 唤醒屏幕 |
| CoreSleepScreen | 休眠屏幕 |
| CoreWifiState | WiFi 状态 |
| CoreBluetoothState | 蓝牙状态 |
| CoreForceStopApp | 强制停止应用 |

### Interaction - 交互模块

UI 交互相关的模块。

| 模块 | 功能描述 |
|------|----------|
| UiSelector | UI 元素选择器 |
| FindTextUntil | 查找文本 |
| OCR | 光学字符识别 |

### System - 系统模块

系统功能相关的模块。

| 模块 | 功能描述 |
|------|----------|
| Delay | 延时等待 |
| SetClipboard | 设置剪贴板 |
| GetClipboard | 获取剪贴板 |
| Toast | 显示提示 |
| WakeScreen | 唤醒屏幕 |
| SleepScreen | 休眠屏幕 |
| Share | 分享内容 |
| ReadSms | 读取短信 |
| CaptureScreen | 屏幕截图 |
| Brightness | 屏幕亮度 |
| Lua | Lua 脚本执行 |
| Invoke | 调用外部应用 |
| QuickView | 快速查看 |

### Logic - 逻辑模块

控制流和逻辑判断模块。

| 模块 | 功能描述 |
|------|----------|
| If | 条件判断 |
| Loop | 循环执行 |
| BreakLoop | 跳出循环 |
| ContinueLoop | 继续循环 |
| Jump | 跳转执行 |
| StopWorkflow | 停止工作流 |
| StopAndReturn | 停止并返回 |
| CallWorkflow | 调用其他工作流 |

### Triggers - 触发器模块

触发工作流执行的条件模块。

| 模块 | 功能描述 |
|------|----------|
| ManualTrigger | 手动触发 |
| TimeTrigger | 定时触发 |
| NotificationTrigger | 通知触发 |
| WifiTrigger | WiFi 状态触发 |
| BluetoothTrigger | 蓝牙状态触发 |
| KeyEventTrigger | 按键触发 |
| ElementTrigger | UI 元素触发 |
| LocationTrigger | 位置触发 |
| BatteryTrigger | 电池状态触发 |

### Data - 数据模块

数据处理和计算模块。

| 模块 | 功能描述 |
|------|----------|
| TextProcessing | 文本处理 |
| Calculation | 数学计算 |
| RandomVariable | 随机数生成 |

### File - 文件模块

文件操作模块。

| 模块 | 功能描述 |
|------|----------|
| SaveImage | 保存图片 |
| ImportImage | 导入图片 |
| AdjustImage | 调整图片 |
| RotateImage | 旋转图片 |
| ApplyMask | 应用遮罩 |

### Notification - 通知模块

通知相关的模块。

| 模块 | 功能描述 |
|------|----------|
| SendNotification | 发送通知 |
| FindNotification | 查找通知 |
| RemoveNotification | 移除通知 |

### Scripted - 脚本模块

用户自定义脚本模块。

| 模块 | 功能描述 |
|------|----------|
| ScriptedModule | 用户脚本 |
| ModuleManager | 模块管理 |

### UI Components - UI 组件模块

创建 UI 组件的模块。

| 模块 | 功能描述 |
|------|----------|
| CreateActivity | 创建活动 |
| CreateFloatWindow | 创建悬浮窗 |

### Snippet - 代码片段模块

可复用的代码片段。

| 模块 | 功能描述 |
|------|----------|
| FindTextUntilSnippet | 查找文本代码片段 |

## 快速链接

- [核心模块详解](/docs/modules/core)
- [交互模块详解](/docs/modules/interaction)
- [系统模块详解](/docs/modules/system)
- [逻辑模块详解](/docs/modules/logic)
- [触发器详解](/docs/modules/triggers)
