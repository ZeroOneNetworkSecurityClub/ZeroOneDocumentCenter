---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/aipno.png',
    name: 'aipno',
    title: '创建者',
    links: [
      { icon: 'github', link: 'https://github.com/aipno' },
    ]
  },
  // {
  //   avatar: 'https://github.com/hsywcn.png',
  //   name: 'hsywcn',
  //   title: '维护者',
  //   links: [
  //     { icon: 'github', link: 'https://github.com/hsywcn' },
  //   ]
  // },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      项目贡献者
    </template>
    <template #lead>
      参与了构建本项目的成员，一些选择了在下方展示。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>