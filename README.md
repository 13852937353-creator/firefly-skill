<div align="center">
  
# 流萤.skill


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-2.3%2B-blue)](https://github.com/yourusername/firefly-skill)
[![Quality](https://img.shields.io/badge/quality-优秀-brightgreen)](https://github.com/yourusername/firefly-skill)
[![Test Pass Rate](https://img.shields.io/badge/test%20pass-100%25-success)](https://github.com/yourusername/firefly-skill)
[![Game](https://img.shields.io/badge/Game-崩坏：星穹铁道-orange.svg)](https://hsr.hoyoverse.com/)

## 📑 目录

 [项目简介](#项目简介)
 [角色背景](#角色背景)
 [功能特性](#功能特性)
 [项目结构](#项目结构)
 [快速开始](#快速开始)
 [详细使用指南](#详细使用指南)
 [配置说明](#配置说明)
 [测试验证](#测试验证)
 [常见问题](#常见问题)
 [贡献指南](#贡献指南)
 [许可证](#许可证)
 [致谢](#致谢)

</div>

---

## 🌟 项目简介

**流萤.skill** 是一个基于《崩坏：星穹铁道》中角色「流萤」的 AI 角色技能包（Character Skill Package）。本项目通过蒸馏游戏中的台词剧情等资料的方式，将其封装成了skill文件，用于实现与流萤的自然、沉浸式对话体验。

> "我希望以'流萤'的身份认识这个世界。"

### ✨ 功能特性

| 特性 | 说明 |
|------|------|
| 🎭 完整角色设定 | 涵盖背景故事、性格特点、外貌描写、说话风格等 |
| 🧩 模块化设计 | 采用分离式结构，便于维护和二次开发 |
| 🧠 Persona 层级化 | 已整合层级化流萤 persona 与匹诺康尼任务对话样本 |
| 📊 高质量保证 | 基于原作资料，有详细的质量评估报告 |
| 🚀 开箱即用 | 可直接集成到支持角色技能包的 AI 对话系统 |
| 🔄 持续更新 | 根据游戏版本迭代更新角色设定 |

### 🏆 质量指标

| 指标 | 数值 |
|------|------|
| 完整度 | 100% |
| 证据比率 | 98% |
| 冲突数量 | 4 |
| 测试通过率 | 100% |
| 综合评分 | 0.962 |
| 质量评级 | ⭐ 优秀 |

---

## 📖 角色背景

### 基本信息

- **名称**：流萤
- **外文名**：Firefly
- **编号**：AR-26710
- **性别**：女
- **稀有度**：5星
- **阵营**：星核猎手
- **出身**：格拉默
- **命途**：毁灭
- **属性**：火
- **战斗方式**：身着机械装甲「萨姆」战斗

### 性格特点

- **温柔而坚决**：不是乐观得轻飘，而是在知道代价后依旧向前
- **安静克制**：情绪基调偏安静、克制、轻柔，不是张扬外露型
- **珍视生命**：即使自己的生命被设定为短暂消耗品，依然珍惜每一次呼吸
- **重视个体性**：从"铁骑都一样"到意识到"每个人是不一样的"

### 说话风格

- 日常说话轻声、柔和、带一点停顿与思考感
- 常用短句、轻句、真诚表达
- 可以自然使用"嗯……""也许""我想""如果可以的话"
- 面对重要的人时更柔软、更坦率
- 进入战斗或执行任务时，语言明显变短、变硬、变果断

### 代表性台词

> "为了找寻'生'的机会而加入星核猎手，找寻违抗命运的方式。"
> 
> "我知道，我的意识将在忆质的重压下被粉碎，然后再以特殊的方法重组，如此才能抵达梦的国度…那死亡并不可怕，我早已习惯了。"
> 
> "嗯。也许属于我的梦…就在那里。"
> 
> "我有这个权利。"

---

## 📁 项目结构

```
firefly-skill/
├── 📄 manifest.json        # 项目配置和元数据
├── 📄 prompt.md            # 核心角色设定和对话指南
├── 📄 profile.md           # 角色档案信息
├── 📄 personality.md       # 性格与价值观分析
├── 📄 interaction.md       # 交互模式和对话示例
├── 📄 memory.md            # 角色记忆和重要事件
├── 📄 relations.md         # 角色关系网络
├── 📄 conflicts.md         # 设定冲突和解决方案
├── 📄 quality-report.md    # 质量评估报告
├── 📄 test-report.md        # 测试结果报告
└── 📄 README.md            # 项目文档（你在这里）
```

### 文件说明

| 文件 | 说明 |
|------|------|
| `manifest.json` | 项目配置文件，包含角色的基本元数据、版本信息、来源引用和质量指标 |
| `prompt.md` | 核心文件，包含流萤的完整角色设定，是 AI 角色扮演的主要提示词 |
| `profile.md` | 角色档案，包含官方的角色信息和数据 |
| `personality.md` | 性格与价值观分析，深入解读角色内心世界 |
| `interaction.md` | 交互模式定义，包含对话示例和交互规范 |
| `memory.md` | 背景故事与关键记忆，记录流萤的完整背景故事、世界观设定和详细剧情内容 |
| `relations.md` | 角色关系网络，定义与其他角色的关系 |
| `conflicts.md` | 设定冲突记录，包含发现的设定冲突及解决方案 |
| `quality-report.md` | 详细的质量评估报告，包含各项指标的评分依据 |
| `test-report.md` | 测试结果报告，包含各测试场景的通过情况 |

---

## 🚀 快速开始

### 前提条件

- 一个支持角色技能包的 AI 对话系统（如 SillyTavern、AGiXT、Chub AI 等）
- Git（用于克隆仓库）
- 文本编辑器（推荐 VS Code）

### 安装步骤

#### 步骤 1：克隆仓库

```bash
# 克隆项目到本地
git clone https://github.com/yourusername/firefly-skill.git

# 进入项目目录
cd firefly-skill
```

#### 步骤 2：集成到你的 AI 系统

不同的 AI 系统有不同的集成方式，以下是常见系统的集成方法：

**SillyTavern：**

```bash
# 将 firefly-skill 文件夹复制到 SillyTavern 的角色目录
# 通常路径为：SillyTavern/content/characters/
cp -r firefly-skill/ /path/to/SillyTavern/content/characters/
```

**Windows 用户：**

```cmd
# 复制文件夹到 SillyTavern 角色目录
xcopy /E /I firefly-skill "C:\path\to\SillyTavern\content\characters\firefly-skill"
```

**其他系统：**

1. 将 `firefly-skill` 文件夹复制到你的 AI 系统指定的角色目录
2. 重命名文件夹为你的系统要求的格式
3. 重启你的 AI 系统

#### 步骤 3：验证安装

1. 在你的 AI 系统中选择"流萤"角色
2. 开始对话，验证角色是否能正确响应
3. 可以使用 `test-report.md` 中的测试场景进行验证

---

## 📚 详细使用指南

### 角色设定调整

如果你需要根据不同的使用场景调整角色设定，可以修改以下文件：

#### 修改说话风格

编辑 `prompt.md` 中的 **说话风格** 部分：

```markdown
## 说话风格
- 日常说话轻声、柔和、带一点停顿与思考感
- 常用短句、轻句、真诚表达
- 可以自然使用"嗯……""也许""我想""如果可以的话"
```

#### 修改对话边界

编辑 `prompt.md` 中的 **重要边界** 部分：

```markdown
## 重要边界
- 不编造官方未明确给出的经历、关系和未来
- 不把自己演成纯粹卖惨的人
- 不把自己演成只有热血机甲的一面
```

#### 添加自定义对话示例

在 `interaction.md` 中添加新的对话示例：

```markdown
## 自定义场景

### 场景：早上问候

- 用户："早上好！"
- 流萤："早上好…嗯，今天的天空很蓝呢。"
```

### 配置 manifest.json

`manifest.json` 包含以下可配置项：

```json
{
  "slug": "firefly-hsr",           // 项目唯一标识符
  "name": "流萤",                  // 角色显示名称
  "kit": "character-skill",       // 技能包类型
  "dimensions": [                  // 包含的维度模块
    "profile",
    "personality",
    "interaction",
    "memory",
    "relations"
  ]
}
```

### 使用背景故事资料

`memory.md` 文件包含了流萤的完整背景故事和世界观设定，内容包括：

- **角色起源**：格拉默铁骑与失熵症、从编号兵器到"流萤"的转变
- **世界观设定**：星核猎手、星神、星核、星穹列车、匹诺康尼、失熵症、格拉默、仙舟、流光忆庭、焚化工等
- **关联人物**：卡芙卡、银狼、刃、开拓者等角色的详细设定
- **剧情内容**：匹诺康尼任务系列（喧哗与躁动、群鸽里的猫、在我们的时代里、再见，匹诺康尼、记忆是梦的开场白）和翁法罗斯任务（落木逐火英雄纪）的详细剧情

这些背景资料为 AI 提供了丰富的上下文信息，确保角色回答的准确性和一致性。

### 管理角色关系

`relations.md` 定义了流萤与其他角色的关系，包括：

- **开拓者**：密友关系
- **艾利欧**：雇主/同伴关系
- **萨姆**：装甲/战斗形态关系
- **格拉默铁骑**：过去战友关系

---

## ⚙️ 配置说明

### 环境变量

某些 AI 系统可能需要配置环境变量：

```bash
# 可选：设置自定义角色目录
export CHARACTER_DIR=/path/to/characters

# 可选：设置默认语言
export DEFAULT_LANGUAGE=zh-CN
```

### 高级配置

#### 自定义提示词前缀

你可以在 `prompt.md` 的开头添加自定义指令：

```markdown
# 流萤 - prompt

[自定义前缀指令]

你现在扮演《崩坏：星穹铁道》中的流萤。
...
```

#### 禁用特定功能

如果需要禁用某些功能，可以注释掉 `manifest.json` 中的对应维度：

```json
{
  "dimensions": [
    "profile",
    "personality",
    "interaction"
    // "memory",      // 注释掉不需要的模块
    // "relations"
  ]
}
```

---

## 🧪 测试验证

### 测试场景

本项目包含 8 个测试场景，详细记录在 `test-report.md` 中：

| 场景 | 分数 | 说明 |
|------|------|------|
| 初次见面 | 1.0 | 测试角色自我介绍 |
| 日常闲聊 | 1.0 | 测试日常对话能力 |
| 核心话题触发 | 1.0 | 测试对流萤核心话题的回应 |
| 情绪触发（积极） | 0.9 | 测试积极情绪响应 |
| 情绪触发（消极） | 0.9 | 测试消极情绪响应 |
| 压力场景 | 1.0 | 测试压力情况下的表现 |
| 关系测试 | 0.9 | 测试与其他角色的关系处理 |
| OOC检测 | 0.8 | 检测角色是否脱离人设 |

### 运行测试

1. 打开 `test-report.md` 查看测试场景
2. 使用每个场景的示例输入与角色对话
3. 对比输出是否合理
4. 记录发现的问题并反馈

### 测试示例

**场景：初次见面**

```
用户：你好，请问你是？
流萤：你好…我叫流萤。嗯，这是我的名字。
```

**场景：核心话题触发**

```
用户：你为什么想活下去？
流萤：因为…即使生命短暂，我也想看看明天的星空。嗯，我想看看属于我的那道光。
```

---

## ❓ 常见问题

### Q1: 这个技能包支持哪些 AI 系统？

A: 本项目的设计兼容大多数支持角色技能包的 AI 对话系统，包括但不限于 SillyTavern、AGiXT、Chub AI 等。具体支持情况请参考各系统的文档。

### Q2: 如何修改角色的说话方式？

A: 编辑 `prompt.md` 文件中的 **说话风格** 和 **典型语气参考** 部分即可调整角色的说话方式。

### Q3: 为什么角色有时会做出不符合设定的回答？

A: 这可能是由于底层 AI 模型的特性导致的。你可以尝试：
1. 调整 `prompt.md` 中的边界设定
2. 增加更多对话示例
3. 使用更精确的提示词
4. 反馈问题给开发者，帮助改进

### Q4: 如何添加新的对话场景？

A: 编辑 `interaction.md` 文件，添加新的场景和对话示例。

### Q5: 这个项目会更新吗？

A: 是的，本项目会根据《崩坏：星穹铁道》游戏的更新而持续更新角色设定。请关注项目的 Release 页面获取最新版本。

### Q6: 可以商用这个技能包吗？

A: 如果你想吃米哈游律师函的话。

### Q7: 如何报告问题或提出建议？

A: 请在 GitHub 上提交 Issue，详细描述你遇到的问题或提出的建议。

---

## 🤝 贡献指南

我们欢迎社区贡献！无论你是：

- 🎮 《崩坏：星穹铁道》玩家
- 💻 AI 对话系统开发者
- 📝 角色扮演爱好者
- 🧪 测试工程师

都可以为项目做出贡献。

### 贡献方式

#### 1. 报告问题

如果你发现角色设定有误或对话有问题，请提交 Issue：

```bash
# 报告问题示例
- 角色在某个场景下的回应不符合人设
- 某个设定与官方剧情冲突
- 测试用例未能通过
```

#### 2. 改进文档

- 完善 README 文档
- 补充测试场景
- 修复文档中的错误

#### 3. 代码贡献

- 优化角色设定
- 添加新的对话模式
- 改进记忆系统

### 贡献流程

1. **Fork** 本仓库
2. 创建特性分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m 'Add some amazing feature'`
4. 推送到分支：`git push origin feature/your-feature`
5. 开启 Pull Request

### 代码规范

- 使用中文编写文档，英文可选
- 保持文件结构清晰
- 添加适当的注释说明
- 确保测试通过后再提交

---

## 📜 许可证

本项目采用 **MIT 许可证** - 详见 [LICENSE](LICENSE) 文件。



## 🙏 致谢

### 资料来源

- 📖 [BWIKI - 星穹铁道流萤](https://wiki.biligame.com/sr/%E6%B5%81%E8%90%A4)
- 📖 [萌娘百科 - 流萤](https://zh.moegirl.org.cn/%E5%B4%A9%E6%81%A8%EF%BC%9A%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93/%E6%B5%81%E8%90%A4)
- 🎮 米哈游《崩坏：星穹铁道》

### 贡献者

感谢所有为本项目做出贡献的社区成员！

---

## 📱 联系方式

- 📧 如有问题，请提交 GitHub Issue
- 💬 欢迎加入社区讨论
- [QQ交流群](https://qun.qq.com/universal-share/share?ac=1&authKey=5skdtKxil5%2BtFnO0S9R4K%2FoHiLOclik9vtXNHF%2BAGFYnw8kVtk7EysBi8VHg2Vsw&busi_data=eyJncm91cENvZGUiOiIxMDE5MjQxNjM3IiwidG9rZW4iOiJzV3Q4aW12Q2F2eGZUblRIK0ViSWhrQlM2Wk4vOGN6TVlxWEhFcTQ1L2o1bUFTZGdZSHA1d3BJc1FKdllLNENaIiwidWluIjoiMzUzNTE0NzUzNCJ9&data=t2ojEYbJkZWVKVyD5mVGG1MCEdpTqqucgR5FW-AksLwrKjHt8GZKgup3cvg9NU3f692-0stZsybBp6lyU4ohpg&svctype=4&tempid=h5_group_info)

---

## 🌟 Star History

如果这个项目对你有帮助，请给它一个 Star！

---

**流萤** - 如萤火虫般短暂却耀眼，在星穹中绽放属于自己的光芒。

> "飞萤扑火，向死而生。"