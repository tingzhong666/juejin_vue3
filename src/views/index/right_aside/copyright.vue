<script setup>

</script>

<template>
  <div class="copyright">
    <div class="footer-links">
      <a class="footer-link" href="#">用户协议</a>
      <a class="footer-link" href="#">营业执照</a>
      <a class="footer-link" href="#">隐私政策</a>
      <a class="footer-link" href="#">关于我们</a>
      <a class="footer-link" href="#">站点地图</a>
      <a class="footer-link" href="#">使用指南</a>
      <a class="footer-link" href="#">友情链接</a>
      <a class="footer-link" href="#">更多文章</a>
    </div>
    <div class="contact-info">
      <span class="contact-label">举报邮箱：</span>
      <a class="contact-email" href="#">feedback@xitu.io</a>
    </div>
    <div class="contact-info">
      <span class="contact-label">座机电话：</span>
      <a class="contact-phone" href="#">010-83434395</a>
    </div>
    <div class="icp-info">京ICP备18012699号-3&nbsp;&nbsp;&nbsp;&nbsp;©2023&nbsp;&nbsp;稀土掘金</div>
  </div>
</template>

<style scoped>
.copyright {
  font-size: 12px;
  color: var(--el-color-info-dark-2);
  line-height: 26px;
}

.copyright a {
  text-decoration: none;
  color: var(--el-color-info-dark-2);
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
}

.footer-link {
  flex: 25%;
}
</style>