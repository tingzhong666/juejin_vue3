// 文章
export const article = {
  /**
   * 
   * @param {object} options 参数对象 
   * @param {number} options.limit 一页多少条
   * @param {number} options.page 第几页
   * @param {string} options.category 类别 对应着首页的二级路由
   * @param {string} options.mdoe 推荐or最新 recommended|latest
   */
  get_list: ({ limit = 10, page = 1, category = 'recommended', mode = 'recommended' }) => {
    const res = []

    return [
      {
        id: 'lsodjwtw',
        title: '试用期改祖传屎山是一种怎么样的体验',
        intro: '前言 来看下项目里的核心技术栈 package.json 里面的配置项 "@angular/core": "~8.1.0" "devextreme": "19.2.5", "typescript": ',
        author: '草帽lufei',
        read_n: 16000,
        star_n: 67,
        tags: [
          { name: '前端', id: 'wfsadfwe2' },
          { name: '程序员', id: 'wfsadfwese2' },
        ],
        cover_img: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dce6c649fcb1443a801cb0f754385a1a~tplv-k3u1fbpfcp-jj:135:90:0:0:q75.avis',
      },
      {
        id: 'qweqwefsdfsg435',
        title: '试用期改祖传屎山是一种怎么样的体验2',
        intro: '前言 来看下项目里的核心技术栈 package.json 里面的配置项 "@angular/core": "~8.1.0" "devextreme": "19.2.5", "typescript": ',
        author: '草帽lufei',
        read_n: 1600,
        star_n: 67,
        tags: [
          { name: '前端', id: 'wfsadfwe2' },
          { name: '程序员', id: 'wfsadfwese2' },
        ],
        cover_img: '',
      },
      {
        id: 'lsodjw2tw',
        title: '试用期改祖传屎山是一种怎么样的体验',
        intro: '前言 来看下项目里的核心技术栈 package.json 里面的配置项 "@angular/core": "~8.1.0" "devextreme": "19.2.5", "typescript": ',
        author: '草帽lufei',
        read_n: 16000,
        star_n: 67,
        tags: [
          { name: '前端', id: 'wfsadfwe2' },
          { name: '程序员', id: 'wfsadfwese2' },
        ],
        cover_img: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dce6c649fcb1443a801cb0f754385a1a~tplv-k3u1fbpfcp-jj:135:90:0:0:q75.avis',
      },
      {
        id: 'qweqwef3sdfsg435',
        title: '试用期改祖传屎山是一种怎么样的体验2',
        intro: '前言 来看下项目里的核心技术栈 package.json 里面的配置项 "@angular/core": "~8.1.0" "devextreme": "19.2.5", "typescript": ',
        author: '草帽lufei',
        read_n: 1600,
        star_n: 67,
        tags: [
          { name: '前端', id: 'wfsadfwe2' },
          { name: '程序员', id: 'wfsadfwese2' },
        ],
        cover_img: '',
      },
      {
        id: 'lsodjw4tw',
        title: '试用期改祖传屎山是一种怎么样的体验',
        intro: '前言 来看下项目里的核心技术栈 package.json 里面的配置项 "@angular/core": "~8.1.0" "devextreme": "19.2.5", "typescript": ',
        author: '草帽lufei',
        read_n: 16000,
        star_n: 67,
        tags: [
          { name: '前端', id: 'wfsadfwe2' },
          { name: '程序员', id: 'wfsadfwese2' },
        ],
        cover_img: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dce6c649fcb1443a801cb0f754385a1a~tplv-k3u1fbpfcp-jj:135:90:0:0:q75.avis',
      },
      {
        id: 'qwe5qwefsdfsg435',
        title: '试用期改祖传屎山是一种怎么样的体验2',
        intro: '前言 来看下项目里的核心技术栈 package.json 里面的配置项 "@angular/core": "~8.1.0" "devextreme": "19.2.5", "typescript": ',
        author: '草帽lufei',
        read_n: 1600,
        star_n: 67,
        tags: [
          { name: '前端', id: 'wfsadfwe2' },
          { name: '程序员', id: 'wfsadfwese2' },
        ],
        cover_img: '',
      },
      {
        id: 'lsodj6wtw',
        title: '试用期改祖传屎山是一种怎么样的体验',
        intro: '前言 来看下项目里的核心技术栈 package.json 里面的配置项 "@angular/core": "~8.1.0" "devextreme": "19.2.5", "typescript": ',
        author: '草帽lufei',
        read_n: 16000,
        star_n: 67,
        tags: [
          { name: '前端', id: 'wfsadfwe2' },
          { name: '程序员', id: 'wfsadfwese2' },
        ],
        cover_img: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dce6c649fcb1443a801cb0f754385a1a~tplv-k3u1fbpfcp-jj:135:90:0:0:q75.avis',
      },
      {
        id: 'qweqwe7fsdfsg435',
        title: '试用期改祖传屎山是一种怎么样的体验2',
        intro: '前言 来看下项目里的核心技术栈 package.json 里面的配置项 "@angular/core": "~8.1.0" "devextreme": "19.2.5", "typescript": ',
        author: '草帽lufei',
        read_n: 1600,
        star_n: 67,
        tags: [
          { name: '前端', id: 'wfsadfwe2' },
          { name: '程序员', id: 'wfsadfwese2' },
        ],
        cover_img: '',
      },
      {
        id: 'lso8djwtw',
        title: '试用期改祖传屎山是一种怎么样的体验',
        intro: '前言 来看下项目里的核心技术栈 package.json 里面的配置项 "@angular/core": "~8.1.0" "devextreme": "19.2.5", "typescript": ',
        author: '草帽lufei',
        read_n: 16000,
        star_n: 67,
        tags: [
          { name: '前端', id: 'wfsadfwe2' },
          { name: '程序员', id: 'wfsadfwese2' },
        ],
        cover_img: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dce6c649fcb1443a801cb0f754385a1a~tplv-k3u1fbpfcp-jj:135:90:0:0:q75.avis',
      },
      {
        id: 'qweqwef9sdfsg435',
        title: '试用期改祖传屎山是一种怎么样的体验2',
        intro: '前言 来看下项目里的核心技术栈 package.json 里面的配置项 "@angular/core": "~8.1.0" "devextreme": "19.2.5", "typescript": ',
        author: '草帽lufei',
        read_n: 1600,
        star_n: 67,
        tags: [
          { name: '前端', id: 'wfsadfwe2' },
          { name: '程序员', id: 'wfsadfwese2' },
        ],
        cover_img: '',
      },
    ]
  }
}