# wContentBox 按钮

### 介绍

wContentBox 是一个示例容器组件

### 引入

```js
import Vue from 'vue';
import { wContentBox } from 'wview';

Vue.use(wContentBox);
```

## 代码演示

### 基础用法

```html
<w-content-box>内容</w-content-box>
```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| shadowColor          | 阴影颜色 | _string_ | `#efefef` |
| color `1.0.0` | 按钮颜色 | _string_ | -         |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
