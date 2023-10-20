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
  get_list: async ({ limit = 10, page = 1, category = 'recommended', mode = 'recommended' }) => {
    const res = []

    return [
      {
        id: 'lsodjwtw',
        title: '试用期改祖传屎山是一种怎么样的体验',
        intro: '前言 来看下项目里的核心技术栈 package.json 里面的配置项 "@angular/core": "~8.1.0" "devextreme": "19.2.5", "typescript": ',
        author: '草帽lufei',
        author_id: '09u245hkjwshfgiuw',
        read_n: 16000,
        star_n: 67,
        star_status: false,
        tags: [
          { name: '前端', id: 'wfsadfwe2' },
          { name: '程序员', id: 'wfsadfwese2' },
          { name: '呵呵', id: 'wfsadfwese2' },
        ],
        cover_img: '/mock/b808570b5b1942dfbc92a483974a3c52~tplv-k3u1fbpfcp-jj_135_90_0_0_q75.jpg',
      },
      {
        id: 'qweqwefsdfsg435',
        title: '试用期改祖传屎山是一种怎么样的体验2',
        intro: '前言 来看下项目里的核心技术栈 package.json 里面的配置项 "@angular/core": "~8.1.0" "devextreme": "19.2.5", "typescript": ',
        author: '草帽lufei',
        read_n: 1600,
        star_n: 67,
        star_status: false,
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
        star_status: false,
        tags: [
          { name: '前端', id: 'wfsadfwe2' },
          { name: '程序员', id: 'wfsadfwese2' },
        ],
        cover_img: '/mock/b808570b5b1942dfbc92a483974a3c52~tplv-k3u1fbpfcp-jj_135_90_0_0_q75.jpg',
      },
      {
        id: 'qweqwef3sdfsg435',
        title: '试用期改祖传屎山是一种怎么样的体验2',
        intro: '前言 来看下项目里的核心技术栈 package.json 里面的配置项 "@angular/core": "~8.1.0" "devextreme": "19.2.5", "typescript": ',
        author: '草帽lufei',
        read_n: 1600,
        star_n: 67,
        star_status: false,
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
        star_status: false,
        tags: [
          { name: '前端', id: 'wfsadfwe2' },
          { name: '程序员', id: 'wfsadfwese2' },
        ],
        cover_img: '/mock/b808570b5b1942dfbc92a483974a3c52~tplv-k3u1fbpfcp-jj_135_90_0_0_q75.jpg',
      },
      {
        id: 'qwe5qwefsdfsg435',
        title: '试用期改祖传屎山是一种怎么样的体验2',
        intro: '前言 来看下项目里的核心技术栈 package.json 里面的配置项 "@angular/core": "~8.1.0" "devextreme": "19.2.5", "typescript": ',
        author: '草帽lufei',
        read_n: 1600,
        star_n: 67,
        star_status: false,
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
        star_status: false,
        tags: [
          { name: '前端', id: 'wfsadfwe2' },
          { name: '程序员', id: 'wfsadfwese2' },
        ],
        cover_img: '/mock/b808570b5b1942dfbc92a483974a3c52~tplv-k3u1fbpfcp-jj_135_90_0_0_q75.jpg',
      },
      {
        id: 'qweqwe7fsdfsg435',
        title: '试用期改祖传屎山是一种怎么样的体验2',
        intro: '前言 来看下项目里的核心技术栈 package.json 里面的配置项 "@angular/core": "~8.1.0" "devextreme": "19.2.5", "typescript": ',
        author: '草帽lufei',
        read_n: 1600,
        star_n: 67,
        star_status: false,
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
        star_status: false,
        tags: [
          { name: '前端', id: 'wfsadfwe2' },
          { name: '程序员', id: 'wfsadfwese2' },
        ],
        cover_img: '/mock/b808570b5b1942dfbc92a483974a3c52~tplv-k3u1fbpfcp-jj_135_90_0_0_q75.jpg',
      },
      {
        id: 'qweqwef9sdfsg435',
        title: '试用期改祖传屎山是一种怎么样的体验2',
        intro: '前言 来看下项目里的核心技术栈 package.json 里面的配置项 "@angular/core": "~8.1.0" "devextreme": "19.2.5", "typescript": ',
        author: '草帽lufei',
        read_n: 1600,
        star_n: 67,
        star_status: false,
        tags: [
          { name: '前端', id: 'wfsadfwe2' },
          { name: '程序员', id: 'wfsadfwese2' },
        ],
        cover_img: '',
      },
    ]
  },
  async get(){
    return {
      content: '官方文档: https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene\n## 安装导入\n#### npm\n```\nnpm i three\n```\n#### 导入\n并非所有功能都在three，还需从子目录导入\n```js\n// three模块\nimport * as three from "three"\n// 一些不在three模块的功能，这里是OrbitControls导入示例\nimport { OrbitControls } from "three/addons/controls/OrbitControls.js";\n```\n#### 静态页面/CDN\nthree是一个esm模块，需要按模块导入方法导入，\n```html\n// 不是所有浏览器都支持ems模块，这是一个esm模块兼容库\n<script defer src="https://unpkg.com/es-module-shims@0.4.6/dist/es-module-shims.js"></script>\n<script type="importmap">\n	{\n		"imports": {\n			"three": "https://unpkg.com/three@<version>/build/three.module.js",\n			"three/addons/": "https://unpkg.com/three@<version>/examples/jsm/"\n		}\n	} </script>\n<script type="module">\n	import * as THREE from "three"; const scene = new THREE.Scene()\n	import { OrbitControls } from "three/addons/controls/OrbitControls.js";\n</script>\n```\n#### npm包查看\n`build`目录有5个js文件，大致分为`three.js`与`three.module.js`，`three.js`中提示已经弃用，现在应该使用`three.module.js`\n## 开始\n#### 环境\n###### 场景\n```js\nconst scene = new three.Scene()\n```\n###### 相机\n```js\nconst camera = new three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)\n```\n相机有多种，这里是透视相机\n- 视野角度。就是你能看到的场景范围\n- 宽高比。注意不是宽高，是宽高比，宽高比及分辨率在渲染器设置\n- 近视距。相机与目标物体小于此值，此物体将不会渲染\n- 远视距。相机与目标物体大于此值，此物体将不会渲染\n###### 帧渲染器\n```js\nconst renderer = new three.WebGLRenderer()\nrenderer.setSize(window.innerWidth, window.innerHeight)\ndocument.body.append(renderer.domElement)\n```\n`setSize` 函数\n- 宽\n- 高\n- 布尔。默认`true`，宽高既是高度也是分辨率。`false` 仅设置分辨率\n直接设置`canvas`的宽高后，就不用在这里设置宽高了，这里设置分辨率就行。\n>动画都是基于`canvas`标签的，示例中的`renderer.domElement`就是一个`canvas`标签，所以可以直接设置宽高。\n#### 动画编写\n```js\nconst geometry = new three.BoxGeometry(1, 1, 1)\nconst material = new three.MeshBasicMaterial({ color: 0xf1f1aa })\nconst cube = new three.Mesh(geometry, material)\n\nscene.add(cube)\ncamera.position.z = 5\n```\n-  形状。一个几何立体形状\n- 材质。一个内置的普通材质\n- 物体。创建物体对象\n- 添加到场景\n- 移动相机。任何物体在场景的初始位置都是(0, 0, 0)，包括相机，所以移动一下相机，不然看不到这个物体，当然，你也可以不移动相机，而去移动物体，这样\n```js\n// camera.position.z = 5\ncube.position.z = -5\n```\n#### 渲染动画\n```js\nfunction animate() {\n  requestAnimationFrame(animate)\n  cube.rotation.x += 0.1\n  cube.rotation.y += 0.1\n  renderer.render(scene, camera)\n}\nanimate()\n```\n你将看到一个不断旋转的立方体。\n`rotation` 是旋转属性\n`renderer.render()` 是一次性的渲染器\n`requestAnimationFrame(callback)` 是属于`window`的，辅助渲染动画的一次性方法。\n- 因为一次性，所以需要将你的动画函数，传入它的回调参数，且每次都要调用它，以达到不断变化的动画效果。\n- 我认为它和定时器的功能差不多，我进行尝试过\n```js\nfunction animate() {\n  cube.rotation.x += 0.1\n  cube.rotation.y += 0.1\n  renderer.render(scene, camera)\n}\nsetInterval(() => {\n  animate()\n}, 20);\n```\n不过它是js内置的用来专门渲染动画的，使用`requestAnimationFrame()`肯定更好\n\n#### 完整示例\n```js\nimport * as three from "three"\n\nconst scene = new three.Scene()\nconst camera = new three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)\nconst renderer = new three.WebGLRenderer()\nrenderer.setSize(window.innerWidth, window.innerHeight)\ndocument.body.append(renderer.domElement)\n\nconst geometry = new three.BoxGeometry(1, 1, 1)\nconst material = new three.MeshBasicMaterial({ color: 0xf1f1aa })\nconst cube = new three.Mesh(geometry, material)\nscene.add(cube)\ncamera.position.z = 5\n\nfunction animate() {\n  requestAnimationFrame(animate)\n  cube.rotation.x += 0.1\n  cube.rotation.y += 0.1\n  renderer.render(scene, camera)\n}\nanimate()\n```',
      title: 'threejs指南',
      author_id: '23465252345',
      author_name: '作为听众',
      created_at: '2020-05-23 10:30:00',
      read_n: 345,
      read_time: 300,
      special_column_id: 'wq234wefw3',
      special_column_name: 'Nest 通关秘籍',
      star_n: 53,
      is_star: false,
      comment_n: 12,
      col_n: 13,
      col_is: false,
      tags: [
        {
          id: '123afwe13re',
          name: 'Node.js',
        },
        {
          id: 'fsdjh23iufij298',
          name: 'NestJS',
        },
      ],
      topic_name: '日新计划更新活动',
      topic_id: 'asdh32ruoi',
    }
  }
}

// 我的圈子
export const myclub = {
  /**
   * Description
   * @param {object} options 参数对象 
   * @param {string} options.user_id 用户id
   * @returns {Array} 
   */
  get_list: async ({ user_id }) => {
    return [
      { name: '技术交流圈', id: 'asdeq' },
      { name: '优秀开源项目', id: 'asdwqeq' },
      { name: '技术交流圈', id: 'asdseq' },
      { name: '优秀开源项目', id: 'asdsawqeq' },
      { name: '技术交流圈', id: 'asde1q' },
      { name: '优秀开源项目', id: 'asdwq2eq' },
      { name: '技术交流圈', id: 'asd3eq' },
      { name: '优秀开源项目', id: 'asd4wqeq' },
    ]
  }
}

// 圈子
export const club = {
  /**
   * Description
   * @returns {Array}
   */
  get_list: async () => {
    return [
      { name: '技术交流圈', id: 'asdeq' },
      { name: '优秀开源项目', id: 'asdwqeq' },
      { name: '技术交流圈', id: 'asdseq' },
      { name: '优秀开源项目', id: 'asdsawqeq' },
      { name: '技术交流圈', id: 'asde1q' },
      { name: '优秀开源项目', id: 'asdwq2eq' },
      { name: '技术交流圈', id: 'asd3eq' },
      { name: '优秀开源项目', id: 'asd4wqeq' },
    ]
  }
}

// 沸点
export const boilingPoint = {
  /**
   * 获取沸点列表
   * @param {object} options 参数对象 
   * @param {Number} options.page 页数
   * @param {Number} options.limit 条数
   * @param {String|'new'|'hot'|'following'|'club'} options.category 分类
   * @param {String} options.club 圈子id。当 options.category='club' 时可填
   * @returns {any}
   */
  async getList(options = { page: 1, limit: 10, category: 'new', club: '' }) {
    return [
      {
        id: 'asd2wq3eq',
        author: {
          id: 'asdwqeq',
          name: 'asdwqeq',
          avatar: '/mock/toux.jpg',
          intro: '我是架构师'
        },
        content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
        created_at: '2020-01-01 00:00:00',
        star_n: 20,
        star_status: false,
        comment_n: 20,
        club: {
          id: '',
          name: ''
        },
        img: ["/mock/b808570b5b1942dfbc92a483974a3c52~tplv-k3u1fbpfcp-jj_135_90_0_0_q75.jpg"],
        link: {
          url: '',
          title: '',
          img: ''
        }
      },
      {
        id: 'asd2wq4eq',
        author: {
          id: 'asdwqeq',
          name: 'asdwqeq',
          avatar: '/mock/toux.jpg',
          intro: '我是架构师'
        },
        content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
        created_at: '2020-01-01 00:00:00',
        star_n: 0,
        star_status: false,
        comment_n: 0,
        club: {
          id: '',
          name: ''
        },
        img: ["/mock/b808570b5b1942dfbc92a483974a3c52~tplv-k3u1fbpfcp-jj_135_90_0_0_q75.jpg"],
        link: {
          url: '',
          title: '',
          img: ''
        }
      },
      {
        id: 'asd2wqeeq',
        author: {
          id: 'asdwqeq',
          name: 'asdwqeq',
          avatar: '/mock/toux.jpg',
          intro: '我是架构师'
        },
        content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
        created_at: '2020-01-01 00:00:00',
        star_n: 0,
        star_status: false,
        comment_n: 0,
        club: {
          id: 'qw134346eqwe',
          name: '优秀开源项目'
        },
        img: [],
        link: {
          url: 'https://juejin.cn/pins/new',
          title: '重金求子',
          img: ''
        }
      },
      {
        id: 'asd2wqeqs',
        author: {
          id: 'asdwqeq',
          name: 'asdwqeq',
          avatar: '/mock/toux.jpg',
          intro: '我是架构师'
        },
        content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
        created_at: '2020-01-01 00:00:00',
        star_n: 0,
        star_status: false,
        comment_n: 0,
        club: {
          id: '',
          name: ''
        },
        img: ["/mock/b808570b5b1942dfbc92a483974a3c52~tplv-k3u1fbpfcp-jj_135_90_0_0_q75.jpg",
          "/mock/b808570b5b1942dfbc92a483974a3c52~tplv-k3u1fbpfcp-jj_135_90_0_0_q75.jpg"],
        link: {
          url: '',
          title: '',
          img: ''
        }
      },
      {
        id: 'asd2wqveq',
        author: {
          id: 'asdwqeq',
          name: 'asdwqeq',
          avatar: '/mock/toux.jpg',
          intro: '我是架构师'
        },
        content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
        created_at: '2020-01-01 00:00:00',
        star_n: 0,
        star_status: false,
        comment_n: 0,
        club: {
          id: '',
          name: ''
        },
        img: ["/mock/b808570b5b1942dfbc92a483974a3c52~tplv-k3u1fbpfcp-jj_135_90_0_0_q75.jpg"],
        link: {
          url: '',
          title: '',
          img: ''
        }
      },
    ]
  },
  comment: {
    /**
     * 获取沸点一维评论列表
     * @param {object} options 参数对象 
     * @param {String} {options.boilingPointId} 沸点id
     * @returns {any}
     */
    async getCommentList({ boilingPointId }) {
      return [
        {
          id: 'asd2wqveq',
          author: {
            id: 'asdwqeq',
            name: 'asdwqeq',
            avatar: '/mock/toux.jpg',
            intro: '我是架构师',
            author_level: 4,
            user_level: 5,
          },
          content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
          created_at: '2020-01-01 00:00:00',
          star_n: 0,
          star_status: false,
          comment_n: 0,
          comment_two: [
            {
              id: 'asd2wqveq46',
              author: {
                id: 'asdwqeq',
                name: 'asdwqeq',
                avatar: '/mock/toux.jpg',
                intro: '我是架构师',
                author_level: 4,
                user_level: 5,
              },
              content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
              created_at: '2020-01-01 00:00:00',
              star_n: 10,
              star_status: false,
              comment_to_content: '',
              comment_to_user_id: '',
              comment_to_user_name: ''
            },
            {
              id: 'asd2wqveq46asdasdffa',
              author: {
                id: 'dsfwoiejowenro23423545234',
                name: '作为听众',
                avatar: '/mock/toux.jpg',
                intro: '我是架构师',
                author_level: 4,
                user_level: 5,
              },
              content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较22222',
              created_at: '2020-01-01 00:00:00',
              star_n: 0,
              star_status: false,
              comment_to_content: '',
              comment_to_user_id: '',
              comment_to_user_name: ''
            },
            {
              id: 'asd2wqveq4sdf6',
              author: {
                id: 'asdwqeq',
                name: 'asdwqeq',
                avatar: '/mock/toux.jpg',
                intro: '我是架构师',
                author_level: 4,
                user_level: 5,
              },
              content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
              created_at: '2020-01-01 00:00:00',
              star_n: 0,
              star_status: false,
              comment_to_content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较22222',
              comment_to_user_id: 'dsfwoiejowenro23423545234',
              comment_to_user_name: '作为听众'
            },
          ]
        },
        {
          id: 'asd2wqveq',
          author: {
            id: 'asdwqeq',
            name: 'asdwqeq',
            avatar: '/mock/toux.jpg',
            intro: '我是架构师',
            author_level: 4,
            user_level: 5,
          },
          content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
          created_at: '2020-01-01 00:00:00',
          star_n: 0,
          star_status: false,
          comment_n: 0,
          comment_two: [
            {
              id: 'asd2wqveq46',
              author: {
                id: 'asdwqeq',
                name: 'asdwqeq',
                avatar: '/mock/toux.jpg',
                intro: '我是架构师',
                author_level: 4,
                user_level: 5,
              },
              content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
              created_at: '2020-01-01 00:00:00',
              star_n: 10,
              star_status: false,
              comment_to_content: '',
              comment_to_user_id: '',
              comment_to_user_name: ''
            },
            {
              id: 'asd2wqveq46asdasdffa',
              author: {
                id: 'asdwqeq',
                name: 'asdwqeq',
                avatar: '/mock/toux.jpg',
                intro: '我是架构师',
                author_level: 4,
                user_level: 5,
              },
              content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
              created_at: '2020-01-01 00:00:00',
              star_n: 0,
              star_status: false,
              comment_to_content: '',
              comment_to_user_id: '',
              comment_to_user_name: ''
            },
            {
              id: 'asd2wqveq4sdf6',
              author: {
                id: 'asdwqeq',
                name: 'asdwqeq',
                avatar: '/mock/toux.jpg',
                intro: '我是架构师',
                author_level: 4,
                user_level: 5,
              },
              content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
              created_at: '2020-01-01 00:00:00',
              star_n: 0,
              star_status: false,
              comment_to_content: '',
              comment_to_user_id: '',
              comment_to_user_name: ''
            },
          ]
        },
        {
          id: 'asd2wqveq',
          author: {
            id: 'asdwqeq',
            name: 'asdwqeq',
            avatar: '/mock/toux.jpg',
            intro: '我是架构师',
            author_level: 4,
            user_level: 5,
          },
          content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
          created_at: '2020-01-01 00:00:00',
          star_n: 0,
          star_status: false,
          comment_n: 0,
          comment_two: [
            {
              id: 'asd2wqveq46',
              author: {
                id: 'asdwqeq',
                name: 'asdwqeq',
                avatar: '/mock/toux.jpg',
                intro: '我是架构师',
                author_level: 4,
                user_level: 5,
              },
              content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
              created_at: '2020-01-01 00:00:00',
              star_n: 10,
              star_status: false,
              comment_to_content: '',
              comment_to_user_id: '',
              comment_to_user_name: ''
            },
            {
              id: 'asd2wqveq46asdasdffa',
              author: {
                id: 'asdwqeq',
                name: 'asdwqeq',
                avatar: '/mock/toux.jpg',
                intro: '我是架构师',
                author_level: 4,
                user_level: 5,
              },
              content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
              created_at: '2020-01-01 00:00:00',
              star_n: 0,
              star_status: false,
              comment_to_content: '',
              comment_to_user_id: '',
              comment_to_user_name: ''
            },
            {
              id: 'asd2wqveq4sdf6',
              author: {
                id: 'asdwqeq',
                name: 'asdwqeq',
                avatar: '/mock/toux.jpg',
                intro: '我是架构师',
                author_level: 4,
                user_level: 5,
              },
              content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
              created_at: '2020-01-01 00:00:00',
              star_n: 0,
              star_status: false,
              comment_to_content: '',
              comment_to_user_id: '',
              comment_to_user_name: ''
            },
          ]
        },
      ]
    },
    /**
     * 获取二维评论列表
     * @param {object} options 参数对象 
     * @param {String} options.boilingPointId 沸点id
     * @param {String} options.commentId 一维评论的id
     * @returns {any}
     */
    async getCommentListTwo({ boilingPointId, commentId }) {
      return [
        {
          id: 'asd2wqveq46asdasdffaesrwer',
          author: {
            id: 'asdwqeq',
            name: 'asdwqeq',
            avatar: '/mock/toux.jpg',
            intro: '我是架构师',
            author_level: 4,
            user_level: 5,
          },
          content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
          created_at: '2020-01-01 00:00:00',
          star_n: 0,
          star_status: false,
          comment_to_content: '',
        },
        {
          id: 'asd2wqveq46asdasdffasdfsdfesrwer',
          author: {
            id: 'asdwqeq',
            name: 'asdwqeq',
            avatar: '/mock/toux.jpg',
            intro: '我是架构师',
            author_level: 4,
            user_level: 5,
          },
          content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
          created_at: '2020-01-01 00:00:00',
          star_n: 0,
          star_status: false,
          comment_to_content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
        },
        {
          id: 'asd2wqveq46asdasdffaesrwes23rr',
          author: {
            id: 'asdwqeq',
            name: 'asdwqeq',
            avatar: '/mock/toux.jpg',
            intro: '我是架构师',
            author_level: 4,
            user_level: 5,
          },
          content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
          created_at: '2020-01-01 00:00:00',
          star_n: 0,
          star_status: false,
          comment_to_content: '',
        },
        {
          id: 'asd2wqveq46asdasdfqwe123faesrwer',
          author: {
            id: 'asdwqeq',
            name: 'asdwqeq',
            avatar: '/mock/toux.jpg',
            intro: '我是架构师',
            author_level: 4,
            user_level: 5,
          },
          content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
          created_at: '2020-01-01 00:00:00',
          star_n: 0,
          star_status: false,
          comment_to_content: '',
        },
      ]
    },
    /**
     * 获取单条二维的评论详情
     * @param {object} options 参数对象 
     * @param {String} options.boilingPointId 沸点id
     * @param {String} options.commentId 一维评论的id
     * @returns {any}
     */
    async getCommentDetailTwo({ boilingPointId, commentId }) {
      return {
        id: 'asd2wqveq46asdasdffaesrwer',
        author: {
          id: 'asdwqeq',
          name: 'asdwqeq',
          avatar: '/mock/toux.jpg',
          intro: '我是架构师',
          author_level: 4,
          user_level: 5,
        },
        content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
        created_at: '2020-01-01 00:00:00',
        star_n: 0,
        star_status: false,
        comment_to_content: '',
      }
    }
  }
}

// 课程
export const course = {
  /**
   * 分类获取
   * @param {object} options 参数对象 
   * @param {'course'|'bytetech'} options.course 普通小册还是字节内部课
   * @returns {Array}
   */
  async getCategory({ course = 'course' }) {
    const res1 = [
      { name: '后端', id: '123aespc' },
      { name: '前端', id: '123adspc' },
      { name: 'android', id: '123afspc' },
      { name: 'IOS', id: '123asgpc' },
      { name: '人工智能', id: '123asvpc' },
      { name: '开发工具', id: '123ascpc' },
      { name: '代码人生', id: '123asxpc' },
      { name: '阅读', id: '123aszpc' },
    ]
    const res2 = [
      { name: '后端', id: '123aespc' },
      { name: '前端', id: '123adspc' },
      { name: 'android', id: '123afspc' },
      { name: 'IOS', id: '123asgpc' },
      { name: '代码人生', id: '123asxpc' },
    ]
    return course == 'course' ? res1 : res2
  },
  /**
   * 课程列表获取
   * @param {object} [options] 参数对象 
   * @param {Number} [options.limit] 
   * @param {Number} [options.page]
   * @param {'course'|'bytetech'} [options.course] 普通小册还是字节内部课
   * @param {'all'|String} [options.category] 分类
   * @param {'all'|String} [options.sort] 排序
   * @param {Boolean} [options.vip] 只看vip课程
   * @returns {Array}
   */
  async getCourseList({ limit = 10, page = 1, course = 'course', category = 'all', sort = 'all', vip = false }) {
    let res
    if (course === 'course') {
      res = [
        {
          "booklet_id": "7288482920602271802",
          "base_info": {
            "id": 0,
            "booklet_id": "7288482920602271802",
            "title": "TypeScript 入门教程",
            "price": 0,
            "category_id": "6809637772874219534",
            "status": 1,
            "user_id": "782508012077678",
            "verify_status": 4,
            "summary": "用简单自然的方式入门 TypeScript",
            "cover_img": "/mock/529e4b28549b4fb9a6540e88b3ebc816~tplv-k3u1fbpfcp-jj-mark_0_0_0_0_q75.image",
            "section_count": 17,
            "section_ids": "7288482920695038012|7288482920841838652|7288665243814658107|7288665244032106552|7288665243894349881|7288665611898552376|7288666405963857957|7288666170151370809|7288666667121868837|7288665885982588988|7288667345310973989|7288667662421655612|7288667169398161469|7288668380977397816|7288668102064078905|7288668538206060601|7288668933501632569|7288669297855955001",
            "is_finished": 1,
            "ctime": 1697025622,
            "mtime": 1697103266,
            "put_on_time": 1697097670,
            "pull_off_time": -62135596800,
            "finished_time": -62135596800,
            "recycle_bin_time": -62135596800,
            "verify_time": -62135596800,
            "submit_time": 1697103266,
            "top_time": 1697097685,
            "wechat_group_img": "",
            "wechat_group_desc": "",
            "wechat_group_signal": "",
            "read_time": 13498,
            "buy_count": 2,
            "course_type": 1,
            "background_img": "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/33054f153f8244a3b5756d4be2a8b95e~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1125\u0026h=723\u0026s=14643\u0026e=jpg\u0026b=2c4f8c",
            "is_distribution": 0,
            "distribution_img": "",
            "commission": 0,
            "can_vip_borrow": false
          },
          "user_info": {
            "user_id": "782508012077678",
            "user_name": "林不渡",
            "company": "阿里巴巴",
            "job_title": "切图小能手",
            "avatar_large": "/mock/toux.jpg",
            "level": 5,
            "description": "冇",
            "followee_count": 31,
            "follower_count": 1580,
            "post_article_count": 36,
            "digg_article_count": 54,
            "got_digg_count": 1897,
            "got_view_count": 137669,
            "post_shortmsg_count": 0,
            "digg_shortmsg_count": 0,
            "isfollowed": false,
            "favorable_author": 1,
            "power": 6129,
            "study_point": 0,
            "university": {
              "university_id": "0",
              "name": "",
              "logo": ""
            },
            "major": {
              "major_id": "0",
              "parent_id": "0",
              "name": ""
            },
            "student_status": 0,
            "select_event_count": 0,
            "select_online_course_count": 0,
            "identity": 0,
            "is_select_annual": true,
            "select_annual_rank": 0,
            "annual_list_type": 0,
            "extraMap": {},
            "is_logout": 0,
            "annual_info": [],
            "account_amount": 0,
            "user_growth_info": {
              "user_id": 782508012077678,
              "jpower": 6129,
              "jscore": 884.9,
              "jpower_level": 5,
              "jscore_level": 5,
              "jscore_title": "先锋掘友",
              "author_achievement_list": [
                1
              ],
              "vip_level": 5,
              "vip_title": "如鱼得水",
              "jscore_next_level_score": 2000,
              "jscore_this_level_mini_score": 500,
              "vip_score": 14030
            },
            "is_vip": false
          },
          "is_buy": false,
          "section_updated_count": 18,
          "is_new": true,
          "max_discount": {
            "discount_type": 0,
            "discount_id": "",
            "coupon_id": "",
            "coupon_basic_id": "",
            "name": "",
            "desc": "",
            "discount_rate": 10,
            "price": 0,
            "discount_money": 0,
            "pay_money": 0,
            "is_limited_time": 0,
            "start_time": 0,
            "end_time": 0
          }
        },
        {
          "booklet_id": "7267462574734573604",
          "base_info": {
            "id": 0,
            "booklet_id": "7267462574734573604",
            "title": "WebGL Shader 魔法指南：创意图形编程入门",
            "price": 2990,
            "category_id": "6809637767543259144",
            "status": 1,
            "user_id": "4353721774401623",
            "verify_status": 4,
            "summary": "用 Shader 编织网页之美，探索图形效果的无限可能",
            "cover_img": "/mock/529e4b28549b4fb9a6540e88b3ebc816~tplv-k3u1fbpfcp-jj-mark_0_0_0_0_q75.image",
            "section_count": 17,
            "section_ids": "7267462649254772790|7267462719622610955|7267462924686327862|7267462924409520182|7267463291306246155|7267462551032889398|7267463265406418956|7267463360814743564|7267463312315514921|7267463407082291241|7267463336034795556|7267463427550314537|7267463382666575926|7267463478800023571|7267463503571582995|7267462924501778473|7267463549731045439|7287603709712793636",
            "is_finished": 1,
            "ctime": 1693813084,
            "mtime": 1697022100,
            "put_on_time": 1694509196,
            "pull_off_time": -62135596800,
            "finished_time": -62135596800,
            "recycle_bin_time": -62135596800,
            "verify_time": -62135596800,
            "submit_time": 1697022100,
            "top_time": 1694509215,
            "wechat_group_img": "",
            "wechat_group_desc": "",
            "wechat_group_signal": "",
            "read_time": 32599,
            "buy_count": 805,
            "course_type": 1,
            "background_img": "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ea98a84951948e6868358a173c8b182~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1125\u0026h=723\u0026s=116277\u0026e=jpg\u0026b=3265ca",
            "is_distribution": 1,
            "distribution_img": "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7cc14a15afa44c1f90eb4da2bab634d0~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1080\u0026h=1920\u0026s=660476\u0026e=jpg\u0026b=396ace",
            "commission": 598,
            "can_vip_borrow": false
          },
          "user_info": {
            "user_id": "4353721774401623",
            "user_name": "alphardex",
            "company": "",
            "job_title": "Shader魔法使",
            "avatar_large": "/mock/toux.jpg",
            "level": 6,
            "description": "個性捨てたらしんでるのと一緒だよ",
            "followee_count": 14,
            "follower_count": 6165,
            "post_article_count": 35,
            "digg_article_count": 126,
            "got_digg_count": 8978,
            "got_view_count": 395300,
            "post_shortmsg_count": 282,
            "digg_shortmsg_count": 22,
            "isfollowed": false,
            "favorable_author": 1,
            "power": 28357,
            "study_point": 0,
            "university": {
              "university_id": "0",
              "name": "",
              "logo": ""
            },
            "major": {
              "major_id": "0",
              "parent_id": "0",
              "name": ""
            },
            "student_status": 0,
            "select_event_count": 0,
            "select_online_course_count": 0,
            "identity": 0,
            "is_select_annual": true,
            "select_annual_rank": 0,
            "annual_list_type": 0,
            "extraMap": {},
            "is_logout": 0,
            "annual_info": [],
            "account_amount": 0,
            "user_growth_info": {
              "user_id": 4353721774401623,
              "jpower": 28357,
              "jscore": 2097.6,
              "jpower_level": 6,
              "jscore_level": 6,
              "jscore_title": "杰出掘友",
              "author_achievement_list": [
                1
              ],
              "vip_level": 5,
              "vip_title": "如鱼得水",
              "jscore_next_level_score": 7000,
              "jscore_this_level_mini_score": 2000,
              "vip_score": 15910
            },
            "is_vip": true
          },
          "is_buy": false,
          "section_updated_count": 18,
          "is_new": true,
          "max_discount": {
            "discount_type": 0,
            "discount_id": "",
            "coupon_id": "",
            "coupon_basic_id": "",
            "name": "",
            "desc": "",
            "discount_rate": 10,
            "price": 2990,
            "discount_money": 2990,
            "pay_money": 2990,
            "is_limited_time": 0,
            "start_time": 0,
            "end_time": 0
          }
        },
        {
          "booklet_id": "7212822723330834487",
          "base_info": {
            "id": 0,
            "booklet_id": "7212822723330834487",
            "title": "Flutter 入门教程",
            "price": 0,
            "category_id": "6809635626879549454",
            "status": 1,
            "user_id": "149189281194766",
            "verify_status": 4,
            "summary": "以有趣的案例为基础，带你入门 Flutter 技术 ~",
            "cover_img": "/mock/529e4b28549b4fb9a6540e88b3ebc816~tplv-k3u1fbpfcp-jj-mark_0_0_0_0_q75.image",
            "section_count": 26,
            "section_ids": "7212563114179428411|7211396362306256955|7212563114049404988|7212903052033359930|7218902185650700323|7218763117507903546|7222036835089219644|7222036835357163579|7222405874328240128|7221793150287740963|7212826825268363321|7212926193670291517|7213166382169948220|7213164697099436093|7212916552826847289|7213167916971294779|7212538072340037669|7228174093223215141|7212903052137726012|7228786042407485501|7228943292283977787|7226982799814131771|7226982735263301687|7228943603488260152|7212903052436013093|7228943568126591034|7227379507273924667",
            "is_finished": 1,
            "ctime": 1694077086,
            "mtime": 1695738693,
            "put_on_time": 1694144546,
            "pull_off_time": 1694144432,
            "finished_time": -62135596800,
            "recycle_bin_time": -62135596800,
            "verify_time": -62135596800,
            "submit_time": 1695738693,
            "top_time": 1694166693,
            "wechat_group_img": "",
            "wechat_group_desc": "",
            "wechat_group_signal": "",
            "read_time": 20508,
            "buy_count": 2,
            "course_type": 1,
            "background_img": "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c54e62cc938448c94099d8f67cd3eba~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1125\u0026h=723\u0026s=113915\u0026e=png\u0026b=745ecc",
            "is_distribution": 0,
            "distribution_img": "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a38c4631dccf4e39a1ec639119fdab55~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1080\u0026h=1920\u0026s=264323\u0026e=png\u0026b=9952e9",
            "commission": 0,
            "can_vip_borrow": false
          },
          "user_info": {
            "user_id": "149189281194766",
            "user_name": "张风捷特烈",
            "company": "编程之王",
            "job_title": "万花过尽知无物",
            "avatar_large": "/mock/toux.jpg",
            "level": 6,
            "description": "海的彼岸有我未曾见证的风采",
            "followee_count": 10,
            "follower_count": 21133,
            "post_article_count": 361,
            "digg_article_count": 388,
            "got_digg_count": 16567,
            "got_view_count": 1734466,
            "post_shortmsg_count": 83,
            "digg_shortmsg_count": 29,
            "isfollowed": false,
            "favorable_author": 1,
            "power": 57637,
            "study_point": 0,
            "university": {
              "university_id": "0",
              "name": "",
              "logo": ""
            },
            "major": {
              "major_id": "0",
              "parent_id": "0",
              "name": ""
            },
            "student_status": 0,
            "select_event_count": 0,
            "select_online_course_count": 0,
            "identity": 0,
            "is_select_annual": false,
            "select_annual_rank": 20,
            "annual_list_type": 0,
            "extraMap": {},
            "is_logout": 0,
            "annual_info": [],
            "account_amount": 0,
            "user_growth_info": {
              "user_id": 149189281194766,
              "jpower": 57637,
              "jscore": 3268.4,
              "jpower_level": 6,
              "jscore_level": 6,
              "jscore_title": "杰出掘友",
              "author_achievement_list": [
                1
              ],
              "vip_level": 5,
              "vip_title": "如鱼得水",
              "jscore_next_level_score": 7000,
              "jscore_this_level_mini_score": 2000,
              "vip_score": 30150
            },
            "is_vip": true
          },
          "is_buy": false,
          "section_updated_count": 27,
          "is_new": false,
          "max_discount": {
            "discount_type": 0,
            "discount_id": "",
            "coupon_id": "",
            "coupon_basic_id": "",
            "name": "",
            "desc": "",
            "discount_rate": 10,
            "price": 0,
            "discount_money": 0,
            "pay_money": 0,
            "is_limited_time": 0,
            "start_time": 0,
            "end_time": 0
          }
        },
        {
          "booklet_id": "7264364390806192188",
          "base_info": {
            "id": 0,
            "booklet_id": "7264364390806192188",
            "title": "通关 Sentinel 流量治理框架",
            "price": 6990,
            "category_id": "6809637769959178254",
            "status": 1,
            "user_id": "1003231605955214",
            "verify_status": 4,
            "summary": "基础实战+原理解析+源码实现，从 0 到 1 轻松掌握高并发海量数据下的流量治理",
            "cover_img": "/mock/529e4b28549b4fb9a6540e88b3ebc816~tplv-k3u1fbpfcp-jj-mark_0_0_0_0_q75.image",
            "section_count": 49,
            "section_ids": "7265141797741920312|7265141797825806397|7265209071706816567|7265213209438027837|7265213799211204665|7265213828688773176|7265213857130348600|7265209071799566391|7265213957287133241|7265213209588531261|7265213763588980795|7265141797969395768|7265214041457426491|7265214015582765117|7265214119828815932|7265213989812961335|7265213883797733434|7265214183686275128|7265214096125984805|7265214273670873145|7265214147980492857|7265214216758378557|7265214246626000953|7265213209757777980|7265214355258966053|7265214068150304826|7265214298564558908|7265214327681581117|7265214481616076861|7265214456173428797|7265214431356223547|7265214532597841979|7265214504978350117|7265214719823200316|7265214378613997627|7265214829194346555|7265214690391752741|7265215068080930875|7265215098858242103|7265215040864092220|7265215182614790181|7265214788274225213|7265214404206002237|7265215380230078525|7265215411342278716|7265215443776831549|7265215210791632952|7265214757748572197|7265215492544495673|7265215148950814781",
            "is_finished": 1,
            "ctime": 1691563403,
            "mtime": 1696839700,
            "put_on_time": 1692781165,
            "pull_off_time": -62135596800,
            "finished_time": -62135596800,
            "recycle_bin_time": -62135596800,
            "verify_time": -62135596800,
            "submit_time": 1696839700,
            "top_time": 1692781171,
            "wechat_group_img": "",
            "wechat_group_desc": "",
            "wechat_group_signal": "",
            "read_time": 45572,
            "buy_count": 271,
            "course_type": 1,
            "background_img": "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2d1914e55794cde879d02ce2f3c7640~tplv-k3u1fbpfcp-watermark.image?",
            "is_distribution": 1,
            "distribution_img": "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff1dfcf64e3d42049c774800a7e9acae~tplv-k3u1fbpfcp-zoom-1.image?",
            "commission": 1398,
            "can_vip_borrow": false
          },
          "user_info": {
            "user_id": "1003231605955214",
            "user_name": "编程界的小學生",
            "company": "",
            "job_title": "英雄不问出处，野路子程序员。",
            "avatar_large": "/mock/toux.jpg",
            "level": 2,
            "description": "曾有幸参与十亿级用户 C 端业务系统的开发，也参与过一些开源框架的二次开发工作。",
            "followee_count": 0,
            "follower_count": 56,
            "post_article_count": 1,
            "digg_article_count": 1,
            "got_digg_count": 11,
            "got_view_count": 601,
            "post_shortmsg_count": 0,
            "digg_shortmsg_count": 0,
            "isfollowed": false,
            "favorable_author": 0,
            "power": 46,
            "study_point": 0,
            "university": {
              "university_id": "0",
              "name": "",
              "logo": ""
            },
            "major": {
              "major_id": "0",
              "parent_id": "0",
              "name": ""
            },
            "student_status": 0,
            "select_event_count": 0,
            "select_online_course_count": 0,
            "identity": 0,
            "is_select_annual": false,
            "select_annual_rank": 0,
            "annual_list_type": 0,
            "extraMap": {},
            "is_logout": 0,
            "annual_info": [],
            "account_amount": 0,
            "user_growth_info": {
              "user_id": 1003231605955214,
              "jpower": 46,
              "jscore": 251.3,
              "jpower_level": 2,
              "jscore_level": 4,
              "jscore_title": "进阶掘友",
              "author_achievement_list": [],
              "vip_level": 3,
              "vip_title": "渐入佳境",
              "jscore_next_level_score": 500,
              "jscore_this_level_mini_score": 150,
              "vip_score": 6280
            },
            "is_vip": true
          },
          "is_buy": false,
          "section_updated_count": 50,
          "is_new": false,
          "max_discount": {
            "discount_type": 0,
            "discount_id": "",
            "coupon_id": "",
            "coupon_basic_id": "",
            "name": "",
            "desc": "",
            "discount_rate": 10,
            "price": 6990,
            "discount_money": 6990,
            "pay_money": 6990,
            "is_limited_time": 0,
            "start_time": 0,
            "end_time": 0
          }
        },
        {
          "booklet_id": "7256280698201243700",
          "base_info": {
            "id": 0,
            "booklet_id": "7256280698201243700",
            "title": "TypeScript 框架开发实战",
            "price": 4990,
            "category_id": "6809637767543259144",
            "status": 1,
            "user_id": "2348212570041837",
            "verify_status": 4,
            "summary": "再现基于 TypeScript 的开源 Web 框架开发历程，助你跨入全栈工程师赛道！",
            "cover_img": "/mock/529e4b28549b4fb9a6540e88b3ebc816~tplv-k3u1fbpfcp-jj-mark_0_0_0_0_q75.image",
            "section_count": 32,
            "section_ids": "7256627665405214735|7256627665015144500|7256755542025535524|7263477828186800191|7263477828329406527|7264556799797002259|7264557361795170316|7263477828660756499|7264555817452437558|7264561821573447716|7264557755296874515|7264559591349420051|7264562580935901223|7264563658007511079|7264564020391182390|7264564376655364150|7264562318581694505|7264564621086818315|7264565908859781159|7264564876239405067|7264571346280480779|7264571841515208745|7264560135572946985|7264573227161092150|7264572197333631017|7264580397210533899|7264565342595678247|7264574962092998668|7264574524841492499|7264581171701350454|7264581647486418955|7264583395090792487|7264574271719440403",
            "is_finished": 1,
            "ctime": 1689566815,
            "mtime": 1696667317,
            "put_on_time": 1692175936,
            "pull_off_time": -62135596800,
            "finished_time": -62135596800,
            "recycle_bin_time": -62135596800,
            "verify_time": -62135596800,
            "submit_time": 1696667317,
            "top_time": 1692175949,
            "wechat_group_img": "",
            "wechat_group_desc": "",
            "wechat_group_signal": "",
            "read_time": 45465,
            "buy_count": 777,
            "course_type": 1,
            "background_img": "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/725540351bbd4575805f247d1446f13f~tplv-k3u1fbpfcp-watermark.image?",
            "is_distribution": 1,
            "distribution_img": "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5cd668e1805d4eaa82d1ba296e032e9a~tplv-k3u1fbpfcp-zoom-1.image?",
            "commission": 998,
            "can_vip_borrow": false
          },
          "user_info": {
            "user_id": "2348212570041837",
            "user_name": "曾振中",
            "company": "",
            "job_title": "",
            "avatar_large": "/mock/toux.jpg",
            "level": 3,
            "description": "大世界，小程序员一枚",
            "followee_count": 17,
            "follower_count": 16,
            "post_article_count": 10,
            "digg_article_count": 40,
            "got_digg_count": 10,
            "got_view_count": 12967,
            "post_shortmsg_count": 30,
            "digg_shortmsg_count": 38,
            "isfollowed": false,
            "favorable_author": 0,
            "power": 323,
            "study_point": 0,
            "university": {
              "university_id": "0",
              "name": "",
              "logo": ""
            },
            "major": {
              "major_id": "0",
              "parent_id": "0",
              "name": ""
            },
            "student_status": 0,
            "select_event_count": 0,
            "select_online_course_count": 0,
            "identity": 0,
            "is_select_annual": false,
            "select_annual_rank": 0,
            "annual_list_type": 0,
            "extraMap": {},
            "is_logout": 0,
            "annual_info": [],
            "account_amount": 0,
            "user_growth_info": {
              "user_id": 2348212570041837,
              "jpower": 323,
              "jscore": 1198.2,
              "jpower_level": 3,
              "jscore_level": 5,
              "jscore_title": "先锋掘友",
              "author_achievement_list": [],
              "vip_level": 0,
              "vip_title": "",
              "jscore_next_level_score": 2000,
              "jscore_this_level_mini_score": 500,
              "vip_score": 0
            },
            "is_vip": false
          },
          "is_buy": false,
          "section_updated_count": 33,
          "is_new": false,
          "max_discount": {
            "discount_type": 0,
            "discount_id": "",
            "coupon_id": "",
            "coupon_basic_id": "",
            "name": "",
            "desc": "",
            "discount_rate": 10,
            "price": 4990,
            "discount_money": 4990,
            "pay_money": 4990,
            "is_limited_time": 0,
            "start_time": 0,
            "end_time": 0
          }
        },
      ]
    } else if (course === 'bytetech') {
      res = [
        {
          "content": {
            "item_id": "7142808926348640263",
            "item_type": 60,
            "publish_time": 1692792885,
            "name": "后端 -  算法、安全、性能优化",
            "abstract": "从零开始动手打造 Go 1.19 排序算法、网站常见安全漏洞及深入浅出零拷贝与应用",
            "cover_image": {
              "key": "",
              "url": "/mock/4fd90e47eece4aaf80f2ecde8136b5f8~tplv-k3u1fbpfcp-5.jpeg",
              "size": 0,
              "mime_type": "",
              "rid": ""
            },
            "mime_type": "markdown",
            "content": "",
            "resource": {},
            "extra": {
              "course_package": {
                "items": [
                  {
                    "title": "详解经典排序算法",
                    "item_id": 7142808162054176804,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "从零开始打造  pdqsort",
                    "item_id": 7142807975344734239,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "网站常见安全漏洞-网站基本组成及漏洞定义",
                    "item_id": 7263832736035995708,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "网站常见安全漏洞-服务端漏洞介绍",
                    "item_id": 7265594758444597285,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "网站常见安全漏洞-客户端漏洞介绍",
                    "item_id": 7265596339466010682,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "网站常见安全漏洞-总结及强调网络安全法",
                    "item_id": 7265596919060103229,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "深入简出零拷贝及应用",
                    "item_id": 7265600288134791224,
                    "item_type": 62,
                    "version": 1
                  }
                ],
                "producer": "聂俊豪、王星星",
                "duration": 12953106,
                "chapter_count": 7
              },
              "html_content": "\u003ch2\u003e课程介绍\u003c/h2\u003e\n\u003cp\u003e本合辑由\u003cstrong\u003e字节跳动技术团队\u003c/strong\u003e一线讲师团倾力出品，系后端入门必修课系列之作。\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e从零开始动手打造 Go 1.19 排序算法\u003c/li\u003e\n\u003cli\u003e网站常见安全漏洞\u003c/li\u003e\n\u003cli\u003e深入浅出零拷贝与应用\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e适宜人群\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e掌握一定的计算机基础，知悉基本的代码操作\u003c/li\u003e\n\u003cli\u003e初阶后端工程师，期待获得系统学习方案\u003c/li\u003e\n\u003cli\u003e有其他方向相关研发经验，后续希望涉足后端研发的人群\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e学习说明\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e后端入门必修课为会员专享，开通会员即可解锁全部章节；\u003c/li\u003e\n\u003cli\u003e本合辑为视频学习形式，\u003cstrong\u003e共计 2 节课程\u003c/strong\u003e，目前已全部更新完成；\u003c/li\u003e\n\u003cli\u003e课程讲解过程中有诸多实战，单节课程简介中均已提供相关工具下载地址，观看前请仔细阅读，提前配置环境；\u003c/li\u003e\n\u003cli\u003e字节内部课课程版权归字节跳动所有，任何机构、媒体、网站或个人未经本网协议授权不得转载、链接、转贴或以其他方式复制发布/发表，违者将依法追究责任；\u003c/li\u003e\n\u003cli\u003e在课程学习过程中，如有任何问题，请邮件联系 \u003ca href=\"mailto:bytetech@bytedance.com\"\u003ebytetech@bytedance.com\u003c/a\u003e。\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://wj.toutiao.com/q/196923/4RZ5XA84/b175/#/\"\u003e反馈通道：您的建议对我们至关重要，此处记录你对字节内部课的体验。\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e字节内部课\u003c/h2\u003e\n\u003cp\u003e作为一家技术驱动的互联网公司，2012 年创立至今，字节跳动业务快速发展，背后离不开久历经技术实战考验的技术团队。过去数年，\u003cstrong\u003e字节跳动内部技术社区 ByteTech\u003c/strong\u003e 基于公司经典实战案例，沉淀了一系列技术研发培训课程，建立了一套经过验证的技术人才培养体系。\u003c/p\u003e\n\u003cp\u003e“字节内部课”是 \u003cstrong\u003eByteTech 联合掘金\u003c/strong\u003e课程团队，基于字节跳动内部培训体系，倾心精选、打磨字节跳动内部优质技术研发培训课程后推出的系列技术实战课程。希望帮助更多技术同学近距离了解、学习来自字节跳动一线工程师的项目实战经验、系统技术知识。\u003c/p\u003e"
            },
            "parent_id": "0",
            "parent_type": 0
          },
          "categories": [
            {
              "category_id": "6809637769959178254",
              "name": "后端",
              "parent_id": "0",
              "create_time": 1662535951,
              "update_time": 1665369476,
              "op_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "rank": 0,
              "category_url": ""
            }
          ],
          "tags": [
            {
              "tag_id": "6809640499062767624",
              "name": "算法",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809641193090056206",
              "name": "排序算法",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809640422172786702",
              "name": "安全",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809641167680962568",
              "name": "性能优化",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            }
          ]
        },
        {
          "content": {
            "item_id": "7142838251227709448",
            "item_type": 60,
            "publish_time": 1691283778,
            "name": "后端入门 - 存储与数据库",
            "abstract": "逐层构建存储与数据库知识体系，体验字节内部实践案例",
            "cover_image": {
              "key": "",
              "url": "/mock/4fd90e47eece4aaf80f2ecde8136b5f8~tplv-k3u1fbpfcp-5.jpeg",
              "size": 0,
              "mime_type": "",
              "rid": ""
            },
            "mime_type": "markdown",
            "content": "",
            "resource": {},
            "extra": {
              "course_package": {
                "items": [
                  {
                    "title": "认识存储与数据库",
                    "item_id": 7142838397097213959,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "主流存储产品剖析",
                    "item_id": 7142838935281926181,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "存储与数据库的新技术演进",
                    "item_id": 7142838189223313445,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "RDBMS 基本情况介绍",
                    "item_id": 7142842075032059935,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "RDBMS 关键技术分析",
                    "item_id": 7142842591766134798,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "RDBMS 企业实践案例",
                    "item_id": 7142842772003766309,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "对象存储基本介绍",
                    "item_id": 7142839959920050190,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "对象存储使用方法",
                    "item_id": 7142842074784595981,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "TOS 字节内部实践",
                    "item_id": 7142843438474461192,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "数据库项目背景、目标与项目设计",
                    "item_id": 7142842308281663525,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "项目搭建与扩展演进",
                    "item_id": 7142844049005740046,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Go 框架三件套详解(Web/RPC/ORM)",
                    "item_id": 7263397917657382949,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Redis-大厂程序员是怎么用的",
                    "item_id": 7263399950230814778,
                    "item_type": 62,
                    "version": 1
                  }
                ],
                "producer": "聂俊豪",
                "duration": 35279214,
                "chapter_count": 13
              },
              "html_content": "\u003ch2\u003e课程介绍\u003c/h2\u003e\n\u003cp\u003e本合辑由\u003cstrong\u003e字节跳动技术团队\u003c/strong\u003e一线讲师团倾力出品，系后端入门必修课系列之作。课程聚焦于多种常见的\u003cstrong\u003e存储 \u0026#x26; 数据库\u003c/strong\u003e系统知识讲解，对 \u003cstrong\u003eRDBMS\u003c/strong\u003e（关系型数据库）、分布式存储的核心技术，抖音红包雨实践展开了深入剖析，并且提供保姆级教授存储与数据库的实战讲学。\u003c/p\u003e\n\u003ch2\u003e课程收获\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e了解\u003cstrong\u003e存储/数据库\u003c/strong\u003e系统的产生背景及基本特点，掌握存储/数据库系统底层逻辑\u003c/li\u003e\n\u003cli\u003e开拓视野，认识到业内最新的 \u003cstrong\u003eSPDK\u003c/strong\u003e、\u003cstrong\u003e人工智能\u003c/strong\u003e和\u003cstrong\u003e新硬件加速\u003c/strong\u003e等技术实践\u003c/li\u003e\n\u003cli\u003e掌握 \u003cstrong\u003eTOS\u003c/strong\u003e 基础用法，走进到字节内部经典项目\u003c/li\u003e\n\u003cli\u003e深入理解 \u003cstrong\u003eRDBMS\u003c/strong\u003e ，能够上手进行项目搭建\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e讲师介绍\u003c/h2\u003e\n\u003cp\u003e\u003cimg src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/149372d44cac4ce194c3e627cd458d4e~tplv-k3u1fbpfcp-5.jpeg?\" alt=\"好像.png\"\u003e\u003c/p\u003e\n\u003ch2\u003e学习路径\u003c/h2\u003e\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\u003ctable\u003e\u003cthead\u003e\u003ctr\u003e\u003cth align=\"center\"\u003e学习模块\u003c/th\u003e\u003cth align=\"center\"\u003e合辑推荐\u003c/th\u003e\u003cth align=\"left\"\u003e主要内容\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块一\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/video_course/7140987981803814919?from_page=course_list_page?from=table\"\u003eGo 语言原理与实践\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003eGo 基础语法与工程实践、性能调优、设计模式、语言笔记服务\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块二\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/video_course/7142773151435489288?from_page=course_list_page?from=table\"\u003e开发与迭代\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003e企业实际开发流程、后端架构剖析、 Git 使用方式\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块三\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/video_course/7142794745390039054?from_page=course_list_page?from=table\"\u003e网络与部署\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003e网络交互、网络提质与提速、网络接入实践\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块四\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/video_course/7142808926348640263?from_page=course_list_page?from=table\"\u003e数据结构与算法\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003e经典排序算法、从零开始打造 pdqsort\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块五\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/video_course/7142811324462923783?from_page=course_list_page?from=table\"\u003eGo 语言框架与实现\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003eRPC 框架设计、字节 Kitex 实践、HTTP 协议、微服务架构\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块六\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/video_course/7142834860837568520?from_page=course_list_page?from=table\"\u003e中间件\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003e消息队列 - Kafka、BMQ、RocketMQ、分布式定时任务\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块七\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/video_course/7142838251227709448?from_page=course_list_page?from=table\"\u003e存储与数据库\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003e存储与数据库技术演进、RDBMS 、对象存储、项目实操\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\n\u003ch2\u003e适宜人群\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e掌握一定的计算机基础，知悉基本的代码操作\u003c/li\u003e\n\u003cli\u003e初阶后端工程师，期待获得系统学习方案\u003c/li\u003e\n\u003cli\u003e有其他方向相关研发经验，后续希望涉足后端研发的人群\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e学习说明\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e后端入门必修课为会员专享，开通会员即可解锁全部章节；\u003c/li\u003e\n\u003cli\u003e本合辑为视频学习形式，\u003cstrong\u003e共计 11 节课程\u003c/strong\u003e，目前已全部更新完成；\u003c/li\u003e\n\u003cli\u003e课程讲解过程中有诸多实战，单节课程简介中均已提供相关工具下载地址，观看前请仔细阅读，提前配置环境；\u003c/li\u003e\n\u003cli\u003e字节内部课课程版权归字节跳动所有，任何机构、媒体、网站或个人未经本网协议授权不得转载、链接、转贴或以其他方式复制发布/发表，违者将依法追究责任；\u003c/li\u003e\n\u003cli\u003e在课程学习过程中，如有任何问题，请邮件联系 \u003ca href=\"mailto:bytetech@bytedance.com\"\u003ebytetech@bytedance.com\u003c/a\u003e。\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://wj.toutiao.com/q/196923/4RZ5XA84/b175/#/\"\u003e反馈通道：您的建议对我们至关重要，此处记录你对字节内部课的体验。\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e字节内部课\u003c/h2\u003e\n\u003cp\u003e作为一家技术驱动的互联网公司，2012 年创立至今，字节跳动业务快速发展，背后离不开久历经技术实战考验的技术团队。过去数年，\u003cstrong\u003e字节跳动内部技术社区 ByteTech\u003c/strong\u003e 基于公司经典实战案例，沉淀了一系列技术研发培训课程，建立了一套经过验证的技术人才培养体系。\u003c/p\u003e\n\u003cp\u003e“字节内部课”是 \u003cstrong\u003eByteTech 联合掘金\u003c/strong\u003e课程团队，基于字节跳动内部培训体系，倾心精选、打磨字节跳动内部优质技术研发培训课程后推出的系列技术实战课程。希望帮助更多技术同学近距离了解、学习来自字节跳动一线工程师的项目实战经验、系统技术知识。\u003c/p\u003e"
            },
            "parent_id": "0",
            "parent_type": 0
          },
          "categories": [
            {
              "category_id": "6809637769959178254",
              "name": "后端",
              "parent_id": "0",
              "create_time": 1662535951,
              "update_time": 1665369476,
              "op_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "rank": 0,
              "category_url": ""
            }
          ],
          "tags": [
            {
              "tag_id": "6809640600502009863",
              "name": "数据库",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809641166313619470",
              "name": "数据结构",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            }
          ]
        },
        {
          "content": {
            "item_id": "7140987981803814919",
            "item_type": 60,
            "publish_time": 1683875116,
            "name": "后端入门 - Go 语言原理与实践",
            "abstract": "走进字节企业级后端研发，全方位掌握Go语言的最佳实践",
            "cover_image": {
              "key": "",
              "url": "/mock/4fd90e47eece4aaf80f2ecde8136b5f8~tplv-k3u1fbpfcp-5.jpeg",
              "size": 0,
              "mime_type": "",
              "rid": ""
            },
            "mime_type": "markdown",
            "content": "",
            "resource": {},
            "extra": {
              "course_package": {
                "items": [
                  {
                    "title": "走进 Go 语言基础语法",
                    "item_id": 7140988735222448165,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Go 语言的实战案例",
                    "item_id": 7141265019756675103,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Go 语言进阶与依赖管理",
                    "item_id": 7141271987174768676,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Go 语言工程实践之测试",
                    "item_id": 7141273296397402148,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "高质量编程简介及编码规范",
                    "item_id": 7142746789941084197,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "性能优化指南",
                    "item_id": 7142746472319025182,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "性能优化分析工具",
                    "item_id": 7142747721789603848,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "性能调优实战案例",
                    "item_id": 7142747721793798158,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "性能优化及自动内存管理",
                    "item_id": 7142749780140097550,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": " Go 内存管理 \u0026 编译器优化思路",
                    "item_id": 7142746789945278500,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Database/sql 及 GORM 相关解读",
                    "item_id": 7142752406692954143,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "GORM 设计原理",
                    "item_id": 7142746839169646628,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "GORM 最佳实践",
                    "item_id": 7142749966539161608,
                    "item_type": 62,
                    "version": 1
                  }
                ],
                "producer": "聂俊豪",
                "duration": 28321572,
                "chapter_count": 13
              },
              "html_content": "\u003ch2\u003e课程介绍\u003c/h2\u003e\n\u003cp\u003e本合辑由\u003cstrong\u003e字节跳动技术团队\u003c/strong\u003e一线讲师团倾力出品，系\u003cstrong\u003e后端入门必修课\u003c/strong\u003e开篇之作。课程通过结合相关项目及实战经验，以日常业务场景为支撑，详细讲解 Go 语言基础原理，深入剖析 Go 语言编码规范，带你快速建立 Go 语言系统认知框架。\u003c/p\u003e\n\u003ch2\u003e课程收获\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e深入浅出 Go 语言基础，带你由浅入深了解技术原理，快速上手实战\u003c/li\u003e\n\u003cli\u003e深入实际案例，知悉项目依赖管理机制与性能调优细节，高效进行 Go 语言工程实践\u003c/li\u003e\n\u003cli\u003e掌握 Go 语言发行版优化与落地实践，提供编译器优化思路参考\u003c/li\u003e\n\u003cli\u003e详解 Database/SQL 与 GORM 实践项目，轻松掌握 GORM 设计原理\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e讲师介绍\u003c/h2\u003e\n\u003cp\u003e\u003cimg src=\"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8810e3ab57ab43bf88a59f2d2815d6d8~tplv-k3u1fbpfcp-5.jpeg?\" alt=\"123.png\"\u003e\u003c/p\u003e\n\u003ch2\u003e学习路径\u003c/h2\u003e\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\u003ctable\u003e\u003cthead\u003e\u003ctr\u003e\u003cth align=\"center\"\u003e学习模块\u003c/th\u003e\u003cth align=\"center\"\u003e合辑推荐\u003c/th\u003e\u003cth align=\"left\"\u003e主要内容\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块一\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/video_course/7140987981803814919?from_page=course_list_page?from=table\"\u003eGo 语言原理与实践\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003eGo 基础语法与工程实践、性能调优、设计模式、语言笔记服务\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块二\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/video_course/7142773151435489288?from_page=course_list_page?from=table\"\u003e开发与迭代\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003e企业实际开发流程、后端架构剖析、 Git 使用方式\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块三\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/video_course/7142794745390039054?from_page=course_list_page?from=table\"\u003e网络与部署\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003e网络交互、网络提质与提速、网络接入实践\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块四\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/video_course/7142808926348640263?from_page=course_list_page?from=table\"\u003e数据结构与算法\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003e经典排序算法、从零开始打造 pdqsort\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块五\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/video_course/7142811324462923783?from_page=course_list_page?from=table\"\u003eGo 语言框架与实现\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003eRPC 框架设计、字节 Kitex 实践、HTTP 协议、微服务架构\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块六\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/video_course/7142834860837568520?from_page=course_list_page?from=table\"\u003e中间件\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003e消息队列 - Kafka、BMQ、RocketMQ、分布式定时任务\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块七\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/video_course/7142838251227709448?from_page=course_list_page?from=table\"\u003e存储与数据库\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003e存储与数据库技术演进、RDBMS 、对象存储、项目实操\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\n\u003ch2\u003e适宜人群\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e掌握一定的计算机基础，知悉基本的代码操作\u003c/li\u003e\n\u003cli\u003e初阶后端工程师，期待获得系统学习方案\u003c/li\u003e\n\u003cli\u003e有其他方向相关研发经验，后续希望涉足后端研发的人群\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e学习说明\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e后端入门必修课为会员专享，开通会员即可解锁全部章节；\u003c/li\u003e\n\u003cli\u003e本合辑为视频学习形式，\u003cstrong\u003e共计 13 节课程\u003c/strong\u003e，目前已全部更新完成；\u003c/li\u003e\n\u003cli\u003e课程讲解过程中有诸多实战，单节课程简介中均已提供相关工具下载地址，观看前请仔细阅读，提前配置环境；\u003c/li\u003e\n\u003cli\u003e字节内部课课程版权归字节跳动所有，任何机构、媒体、网站或个人未经本网协议授权不得转载、链接、转贴或以其他方式复制发布/发表，违者将依法追究责任；\u003c/li\u003e\n\u003cli\u003e在课程学习过程中，如有任何问题，请邮件联系 \u003ca href=\"mailto:bytetech@bytedance.com\"\u003ebytetech@bytedance.com\u003c/a\u003e。\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://wj.toutiao.com/q/196923/4RZ5XA84/b175/#/\"\u003e反馈通道：您的建议对我们至关重要，此处记录你对字节内部课的体验。\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e字节内部课\u003c/h2\u003e\n\u003cp\u003e作为一家技术驱动的互联网公司，2012 年创立至今，字节跳动业务快速发展，背后离不开久历经技术实战考验的技术团队。过去数年，\u003cstrong\u003e字节跳动内部技术社区 ByteTech\u003c/strong\u003e 基于公司经典实战案例，沉淀了一系列技术研发培训课程，建立了一套经过验证的技术人才培养体系。\u003c/p\u003e\n\u003cp\u003e“字节内部课”是 \u003cstrong\u003eByteTech 联合掘金\u003c/strong\u003e课程团队，基于字节跳动内部培训体系，倾心精选、打磨字节跳动内部优质技术研发培训课程后推出的系列技术实战课程。希望帮助更多技术同学近距离了解、学习来自字节跳动一线工程师的项目实战经验、系统技术知识。\u003c/p\u003e"
            },
            "parent_id": "0",
            "parent_type": 0
          },
          "categories": [
            {
              "category_id": "6809637769959178254",
              "name": "后端",
              "parent_id": "0",
              "create_time": 1662535951,
              "update_time": 1665369476,
              "op_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "rank": 0,
              "category_url": ""
            }
          ],
          "tags": [
            {
              "tag_id": "6809640364677267469",
              "name": "Go",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809640674011381768",
              "name": "SQL",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809640600502009863",
              "name": "数据库",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            }
          ]
        },
        {
          "content": {
            "item_id": "7158744309133475848",
            "item_type": 60,
            "publish_time": 1683873858,
            "name": "通用素质 - 技术写作原理",
            "abstract": "系统学习写作流程，掌握通用写作要点和技巧",
            "cover_image": {
              "key": "",
              "url": "/mock/4fd90e47eece4aaf80f2ecde8136b5f8~tplv-k3u1fbpfcp-5.jpeg",
              "size": 0,
              "mime_type": "",
              "rid": ""
            },
            "mime_type": "markdown",
            "content": "",
            "resource": {},
            "extra": {
              "course_package": {
                "items": [
                  {
                    "title": "技术写作课程概览",
                    "item_id": 7158745103593373733,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "如何了解读者",
                    "item_id": 7158745595241299976,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "如何结构化写作",
                    "item_id": 7158748414530830372,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "如何写好标题",
                    "item_id": 7158748987242053669,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "如何极简写作",
                    "item_id": 7158745881322192932,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "如何检查文档",
                    "item_id": 7158749222513147935,
                    "item_type": 62,
                    "version": 1
                  }
                ],
                "producer": "金卓、曹颖、覃佳",
                "duration": 3225680,
                "chapter_count": 6
              },
              "html_content": "\u003ch2\u003e课程介绍\u003c/h2\u003e\n\u003cp\u003e本合辑为字节技术文档工程师精心奉献，聚焦于\u003cstrong\u003e工程师软性能力\u003c/strong\u003e提升，根据多年工作经验汇集而成写作心得。整个课程设计将通用写作拆解成五个部分，全流程搭建企业级项目，\u003cstrong\u003e通过总结写作的「前 - 中 - 后」三个阶段\u003c/strong\u003e，揭露在进行技术写作时需要注意的要点，将其整理成系统的技巧，通读整个系列课程，将帮助你快速搭建系统的基础写作知识。\u003c/p\u003e\n\u003ch2\u003e课程收获\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e系统地认识写作：了解写作的底层逻辑和常规步骤，掌握通用的基础写作技巧\u003c/li\u003e\n\u003cli\u003e写出清晰的文档：帮助你写出符合目标读者预期的有逻辑、有框架、可读性强的文档\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e讲师介绍\u003c/h2\u003e\n\u003cp\u003e\u003cimg src=\"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62237905f431418ebdd0a70efb0ef38b~tplv-k3u1fbpfcp-5.jpeg?\" alt=\"5.png\"\u003e\u003c/p\u003e\n\u003ch2\u003e学习路径\u003c/h2\u003e\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\u003ctable\u003e\u003cthead\u003e\u003ctr\u003e\u003cth align=\"center\"\u003e学习模块\u003c/th\u003e\u003cth align=\"center\"\u003e合辑推荐\u003c/th\u003e\u003cth align=\"left\"\u003e主要内容\u003c/th\u003e\u003cth align=\"center\"\u003e状态\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块一\u003c/td\u003e\u003ctd align=\"center\"\u003e写作原理\u003c/td\u003e\u003ctd align=\"left\"\u003e研究读者、标题创作、文章结构、文档检查\u003c/td\u003e\u003ctd align=\"center\"\u003e已上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块二\u003c/td\u003e\u003ctd align=\"center\"\u003e写作实践\u003c/td\u003e\u003ctd align=\"left\"\u003e文章类型、文档应用场景、文章质量提升\u003c/td\u003e\u003ctd align=\"center\"\u003e待上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块三\u003c/td\u003e\u003ctd align=\"center\"\u003e方案设计\u003c/td\u003e\u003ctd align=\"left\"\u003e方案选型、优化方案、实现效果，复盘总结\u003c/td\u003e\u003ctd align=\"center\"\u003e待上线\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\n\u003ch2\u003e适宜人群\u003c/h2\u003e\n\u003col\u003e\n\u003cli\u003e缺乏写作技巧，寻求解决写作的痛点（如主题不清晰、内容杂乱、语言啰嗦）方案的同学\u003c/li\u003e\n\u003cli\u003e想要进一步提升写作技能的同学\u003c/li\u003e\n\u003c/ol\u003e\n\u003ch2\u003e学习说明\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e「通用素质 - 技术写作原理」合辑为会员专享，开通会员即可解锁全部章节；\u003c/li\u003e\n\u003cli\u003e本合辑为视频学习形式，\u003cstrong\u003e共计 6 节课程\u003c/strong\u003e，目前已全部更新完成；\u003c/li\u003e\n\u003cli\u003e字节内部课课程版权归字节跳动所有，任何机构、媒体、网站或个人未经本网协议授权不得转载、链接、转贴或以其他方式复制发布/发表，违者将依法追究责任；\u003c/li\u003e\n\u003cli\u003e在课程学习过程中，如有任何问题，请邮件联系 \u003ca href=\"mailto:bytetech@bytedance.com\"\u003ebytetech@bytedance.com\u003c/a\u003e；\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://wj.toutiao.com/q/196923/4RZ5XA84/b175/#/\"\u003e你的建议对我们至关重要，此处记录你对字节内部课的体验。\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e字节内部课\u003c/h2\u003e\n\u003cp\u003e作为一家技术驱动的互联网公司，2012 年创立至今，字节跳动业务快速发展，背后离不开久历经技术实战考验的技术团队。过去数年，\u003cstrong\u003e字节跳动内部技术社区 ByteTech\u003c/strong\u003e 基于公司经典实战案例，沉淀了一系列技术研发培训课程，建立了一套经过验证的技术人才培养体系。\u003c/p\u003e\n\u003cp\u003e“字节内部课”是 \u003cstrong\u003eByteTech 联合掘金课程团队\u003c/strong\u003e，基于字节跳动内部培训体系，倾心精选、打磨字节跳动内部优质技术研发培训课程后推出的系列技术实战课程。希望帮助更多技术同学近距离了解、学习来自字节跳动一线工程师的项目实战经验、系统技术知识。\u003c/p\u003e"
            },
            "parent_id": "0",
            "parent_type": 0
          },
          "categories": [
            {
              "category_id": "6809637776263217160",
              "name": "代码人生",
              "parent_id": "0",
              "create_time": 1662535951,
              "update_time": 1666868475,
              "op_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "rank": 0,
              "category_url": ""
            }
          ],
          "tags": [
            {
              "tag_id": "6809640407484334093",
              "name": "前端",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            }
          ]
        },
        {
          "content": {
            "item_id": "7219155491984212024",
            "item_type": 60,
            "publish_time": 1683166898,
            "name": "字节前端初阶训练营",
            "abstract": "致力于打造适用于字节前端岗位体系化的课程，帮助同学对前端技术有体系化的认知",
            "cover_image": {
              "key": "",
              "url": "/mock/4fd90e47eece4aaf80f2ecde8136b5f8~tplv-k3u1fbpfcp-5.jpeg",
              "size": 0,
              "mime_type": "",
              "rid": ""
            },
            "mime_type": "markdown",
            "content": "",
            "resource": {},
            "extra": {
              "course_package": {
                "items": [
                  {
                    "title": "计算机网络概论",
                    "item_id": 7219155491992600613,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Linux 基础",
                    "item_id": 7219155711941410871,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Shell 脚本和编程",
                    "item_id": 7219202683205976121,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "编程范式",
                    "item_id": 7219207612301049917,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "客户端容器",
                    "item_id": 7221511104966361143,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "前端语言串讲",
                    "item_id": 7221509542458097725,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "理解 CSS",
                    "item_id": 7222933278855495735,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "深入理解 JS",
                    "item_id": 7222933258554572855,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "深入浅出 TypeScript",
                    "item_id": 7223915114905698362,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "React 基础与实践",
                    "item_id": 7223916650198122557,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "React 状态管理",
                    "item_id": 7225633056903102501,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "React 路由与项目实践",
                    "item_id": 7226900740042653751,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "组件库的使用与自定义组件",
                    "item_id": 7226903955647758373,
                    "item_type": 62,
                    "version": 1
                  }
                ],
                "producer": "李兵、王丰",
                "duration": 43913688,
                "chapter_count": 13
              },
              "html_content": "\u003ch2\u003e课程介绍\u003c/h2\u003e\n\u003cp\u003e在这系列课程中，大家将学习计算机基础知识和前端开发相关知识。计算机基础课程包括网络技术、Linux和Shell、编程范式。前端基础课程前端语言串讲、CSS、JavaScript、包括客户端容器、服务端基本架构、React 全家桶和组件库的使用与自定义组件。\u003c/p\u003e\n\u003ch2\u003e讲师介绍\u003c/h2\u003e\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\u003ctable\u003e\u003cthead\u003e\u003ctr\u003e\u003cth\u003e\u003cstrong\u003e姓名\u003c/strong\u003e\u003c/th\u003e\u003cth\u003e\u003cstrong\u003e讲师介绍\u003c/strong\u003e\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e祝鑫奔\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e毕业于南昌大学，2019 年加入字节跳动，曾在抖音前端架构负责工程化中构建体系的设计和研发。现负责 ToB 相关业务。\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e徐里桐\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e毕业于浙江理工大学，2020 年加入字节跳动，期间负责过前端部署平台及低码相关业务。目前主要投入在 k8s 相关的云服务业务中。\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e陈健\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e硕士毕业于北京邮电大学，2018年加入字节跳动，期间负责过视频云、公有云 Iaas 相关业务， 目前主要负责 Iaas toB 方向的前端工程化工作\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e何一鸣\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e2010-2022 就职于阿里巴巴与蚂蚁集团，负责过前端框架，基础组件，文档技术等多个领域的开发和架构工作，2022 年 5 月加入基础架构前端团队，目前负责开发者服务相关产品开发。\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e高臻熙\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e负责过ToB/ToC/ToD产品的业务开发工作，2020年加入字节跳动，目前主要负责PaaS云产品的开发以及Web 3D相关的研究。\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e张琪\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e2018年毕业于中南民族大学 经历： 2018 - 2020 滴滴出行业务平台技术，2020 - 至今 字节跳动边缘云，方向： 边缘计算-边缘创新\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e何坦宏\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e2021年9月加入字节视频云团队，负责视频直播相关业务开发工作\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e武泽旭\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e21年加入字节，目前负责点播相关业务，关注ToB控制台体验\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e贺庆阳\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e19年加入字节，目前负责直播SaaS业务，关注web多媒体应用，欢迎交流。\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e杨雨涵\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e2020 年毕业于重庆邮电大学并加入字节跳动，目前参与 Arco Design 设计系统及基础架构平台模块开发\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e余小亮\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e2019年加入字节跳动，负责过视频架构/架构/系统部的前端开发工作。\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e王威\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e2018-2021年就职于阿里巴巴盒马鲜生，负责过空间可视化，门店IOT，逻辑编排等方向的工作，2021年9月加入字节视频云团队负责WebRTC相关的工作\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd\u003e\u003cstrong\u003e尹凯慧\u003c/strong\u003e\u003c/td\u003e\u003ctd\u003e2019 年入职字节，负责 Arco Design 相关的工作。\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\n\u003ch2\u003e适宜人群\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e有一定的 HTML、CSS 和 JS 基础的前端新人，知悉基本的代码操作\u003c/li\u003e\n\u003cli\u003e对前端感兴趣的学生、初入职场的前端工作者，期待学习业内较成熟的前端研发知识\u003c/li\u003e\n\u003cli\u003e有其他方向相关研发经验，后续希望涉足前端研发的人群\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e学习说明\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e前端入门必修课为会员专享，开通会员即可解锁全部章节；\u003c/li\u003e\n\u003cli\u003e本合辑为视频学习形式，共计 13 节课程；\u003c/li\u003e\n\u003cli\u003e课程讲解过程中有诸多实战，单节课程简介中均已提供相关工具下载地址，观看前请仔细阅读，提前配置环境；\u003c/li\u003e\n\u003cli\u003e字节内部课课程版权归字节跳动所有，任何机构、媒体、网站或个人未经本网协议授权不得转载、链接、转贴或以其他方式复制发布/发表，违者将依法追究责任；\u003c/li\u003e\n\u003cli\u003e在课程学习过程中，如有任何问题，请邮件联系 \u003ca href=\"mailto:bytetech@bytedance.com\"\u003ebytetech@bytedance.com\u003c/a\u003e。\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://wj.toutiao.com/q/196923/4RZ5XA84/b175/#/\"\u003e你的建议对我们至关重要，此处记录你对字节内部课的体验。\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e字节内部课\u003c/h2\u003e\n\u003cp\u003e作为一家技术驱动的互联网公司，2012 年创立至今，字节跳动业务快速发展，背后离不开久历经技术实战考验的技术团队。过去数年，\u003cstrong\u003e字节跳动内部技术社区\u003c/strong\u003e \u003cstrong\u003eByteTech\u003c/strong\u003e 基于公司经典实战案例，沉淀了一系列技术研发培训课程，建立了一套经过验证的技术人才培养体系。\u003c/p\u003e\n\u003cp\u003e“字节内部课”是 ByteTech 联合掘金课程团队，基于字节跳动内部培训体系，倾心精选、打磨字节跳动内部优质技术研发培训课程后推出的系列技术实战课程。希望帮助更多技术同学近距离了解、学习来自字节跳动一线工程师的项目实战经验、系统技术知识。\u003c/p\u003e"
            },
            "parent_id": "0",
            "parent_type": 0
          },
          "categories": [
            {
              "category_id": "6809637767543259144",
              "name": "前端",
              "parent_id": "0",
              "create_time": 1662535951,
              "update_time": 1665369476,
              "op_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "rank": 0,
              "category_url": ""
            }
          ],
          "tags": [
            {
              "tag_id": "6809640392770715656",
              "name": "HTML",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809640394175971342",
              "name": "CSS",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809640398105870343",
              "name": "JavaScript",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6813989805311918093",
              "name": "Preact",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809640543006490638",
              "name": "TypeScript",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            }
          ]
        },
        {
          "content": {
            "item_id": "7181338062453112888",
            "item_type": 60,
            "publish_time": 1672146110,
            "name": "iOS 入门 - 网络编程与多媒体开发",
            "abstract": "理论 + 实战，亲手揭开 iOS 开发的神秘面纱",
            "cover_image": {
              "key": "",
              "url": "/mock/4fd90e47eece4aaf80f2ecde8136b5f8~tplv-k3u1fbpfcp-5.jpeg",
              "size": 0,
              "mime_type": "",
              "rid": ""
            },
            "mime_type": "markdown",
            "content": "",
            "resource": {},
            "extra": {
              "course_package": {
                "items": [
                  {
                    "title": "iOS 交互与手势",
                    "item_id": 7181339940075077689,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "iOS 动画编程",
                    "item_id": 7181339940947656760,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "互联网 APP 一览 \u0026 文件管理与程序化",
                    "item_id": 7181337077504540729,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "iOS 网络编程 \u0026 Demo",
                    "item_id": 7181337874158059580,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "探索 iOS 多媒体技术",
                    "item_id": 7181340533032222780,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "苹果开发者设计模式与开发范式",
                    "item_id": 7181341108348125240,
                    "item_type": 62,
                    "version": 1
                  }
                ],
                "producer": "陈壬",
                "duration": 12650621,
                "chapter_count": 6
              },
              "html_content": "\u003ch2\u003e课程介绍\u003c/h2\u003e\n\u003cp\u003e对于一个 iOS 入门者而言，学好有关动画、多媒体、网络编程等技能是为开发打下基础的必要步骤，可以说是每个 iOS 工程师同学都必须熟练掌握的技术。本课程通过不同主题的子课题组成完整的 iOS 入门佳作，掌握动画、音视频、UI、交互、苹果开发等范式，手把手教大家完成图片的采集和显示，音视频的录制和播放。\u003c/p\u003e\n\u003cp\u003e此外，课程中将以 App Store 中排名前几的 App 为例，学习使用 iOS 的文件管理 API 序列化手段，讲解 App 沙盒文件管理以及序列化，通过剖析 iOS 的原生网络库 API 实现与服务端的数据交互，进一步了解苹果开发者范式。\u003c/p\u003e\n\u003ch2\u003e课程收获\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e进一步熟练掌握 iOS 基础语法\u003c/li\u003e\n\u003cli\u003e熟悉 UI 控件的使用\u003c/li\u003e\n\u003cli\u003e掌握 APP 的控件接收处理用户的交互手势的操作原理\u003c/li\u003e\n\u003cli\u003e了解 APP 沙盒文件管理以及序列化\u003c/li\u003e\n\u003cli\u003e灵活运用设计模式，选择合适的开发范式\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e讲师介绍\u003c/h2\u003e\n\u003cp\u003e\u003cimg src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/95af1101dc2d478b8baea014ab347635~tplv-k3u1fbpfcp-5.jpeg?\" alt=\"1.png\"\u003e\u003c/p\u003e\n\u003ch2\u003e学习路径\u003c/h2\u003e\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\u003ctable\u003e\u003cthead\u003e\u003ctr\u003e\u003cth align=\"center\"\u003e学习模块\u003c/th\u003e\u003cth align=\"center\"\u003e合辑推荐\u003c/th\u003e\u003cth align=\"left\"\u003e主要内容\u003c/th\u003e\u003cth align=\"center\"\u003e状态\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块一\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/course/bytetech/7158271919152693256?from_page=course_list_page\"\u003eiOS 开发者生态概览\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003eiOS 行业状况、开发标准、高效协作\u003c/td\u003e\u003ctd align=\"center\"\u003e已上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块二\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/course/bytetech/7158705477671452680?from_page=course_list_page\"\u003eiOS 语言基础\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003eXcode、Objective-C、GCD、Swift、内存管理\u003c/td\u003e\u003ctd align=\"center\"\u003e已上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块三\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/course/bytetech/7181338062453112888?from_page=course_list_page\"\u003eiOS 入门\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003e动画编程、多媒体技术、开发范式\u003c/td\u003e\u003ctd align=\"center\"\u003e已上线\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\n\u003ch2\u003e适宜人群\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eiOS 初阶开发工程师或希望快速入门 iOS 开发同学\u003c/li\u003e\n\u003cli\u003e对音视频技术感兴趣的开发工程师\u003c/li\u003e\n\u003cli\u003e掌握基本的 OC 语法，熟悉 UI 的相关属性以及事件的响应方法\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e学习说明\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e「iOS入门 - iOS 动画与多媒体」为会员专享，开通会员即可解锁全部章节；\u003c/li\u003e\n\u003cli\u003e本合辑为视频学习形式，\u003cstrong\u003e共计 6 节课程\u003c/strong\u003e，目前已全部更新完成；\u003c/li\u003e\n\u003cli\u003e课程讲解过程中有诸多实战，单节课程简介中均已提供相关工具下载地址，观看前请仔细阅读，提前配置环境；\u003c/li\u003e\n\u003cli\u003e字节内部课课程版权归字节跳动所有，任何机构、媒体、网站或个人未经本网协议授权不得转载、链接、转贴或以其他方式复制发布/发表，违者将依法追究责任；\u003c/li\u003e\n\u003cli\u003e在课程学习过程中，如发现任何涉及侵权或其他问题，请邮件联系 \u003ca href=\"mailto:bytetech@bytedance.com\"\u003ebytetech@bytedance.com\u003c/a\u003e；\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://wj.toutiao.com/q/196923/4RZ5XA84/b175/#/\"\u003e你的建议对我们至关重要，此处记录你对字节内部课的体验。\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e字节内部课\u003c/h2\u003e\n\u003cp\u003e作为一家技术驱动的互联网公司，2012 年创立至今，字节跳动业务快速发展，背后离不开久历经技术实战考验的技术团队。过去数年，\u003cstrong\u003e字节跳动内部技术社区 ByteTech\u003c/strong\u003e 基于公司经典实战案例，沉淀了一系列技术研发培训课程，建立了一套经过验证的技术人才培养体系。\u003c/p\u003e\n\u003cp\u003e“字节内部课”是 \u003cstrong\u003eByteTech 联合掘金课程团队\u003c/strong\u003e，基于字节跳动内部培训体系，倾心精选、打磨字节跳动内部优质技术研发培训课程后推出的系列技术实战课程。希望帮助更多技术同学近距离了解、学习来自字节跳动一线工程师的项目实战经验、系统技术知识。\u003c/p\u003e"
            },
            "parent_id": "0",
            "parent_type": 0
          },
          "categories": [
            {
              "category_id": "6809635626661445640",
              "name": "iOS",
              "parent_id": "0",
              "create_time": 1662535951,
              "update_time": 1665369476,
              "op_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "rank": 0,
              "category_url": ""
            }
          ],
          "tags": [
            {
              "tag_id": "6809640399544516616",
              "name": "iOS",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6931165776812441614",
              "name": "音视频开发",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            }
          ]
        },
        {
          "content": {
            "item_id": "7181363006335352890",
            "item_type": 60,
            "publish_time": 1672146106,
            "name": "项目管理 - 从理论到实践",
            "abstract": "连接大厂项目，全方位解读项目管理基础理念和实战初阶技巧",
            "cover_image": {
              "key": "",
              "url": "/mock/4fd90e47eece4aaf80f2ecde8136b5f8~tplv-k3u1fbpfcp-5.jpeg",
              "size": 0,
              "mime_type": "",
              "rid": ""
            },
            "mime_type": "markdown",
            "content": "",
            "resource": {},
            "extra": {
              "course_package": {
                "items": [
                  {
                    "title": "项目管理基础理念介绍",
                    "item_id": 7181363922081939512,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "启动：项目启动如何高效开展",
                    "item_id": 7181363922849497146,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "规划：项目规划如何制定",
                    "item_id": 7181364983861608503,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "执行：进度如何高效跟进",
                    "item_id": 7181343597298942011,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "执行：如何「拥抱变化」",
                    "item_id": 7181364099018653752,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "监控：风险如何识别、应对",
                    "item_id": 7181365496980176956,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "收尾：如何高效、有效复盘",
                    "item_id": 7181365216876167223,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "实用的项目管理模板推荐",
                    "item_id": 7181366090922999864,
                    "item_type": 62,
                    "version": 1
                  }
                ],
                "producer": "秦川、周航",
                "duration": 11007320,
                "chapter_count": 8
              },
              "html_content": "\u003ch2\u003e课程介绍\u003c/h2\u003e\n\u003cp\u003e本合辑将通过项目管理方法论和实操技巧，重点解决项目管理实战中的核心痛点，目的是通过项目管理赋能达成能力迁移，让目标受众能够利用项目管理方法论和实操技巧切实指导项目管理实战。\u003c/p\u003e\n\u003cp\u003e整个系列课程分为两个合辑形式上线，本合辑为一期。旨在让大家了解什么是项目、什么是项目管理、项目管理五大过程组/十大知识领域，以及敏捷项目管理和传统项目管理的区别；同时结合项目管理实战初阶课程，让大家了解项目启动会如何开展、项目计划如何制定、进度如何高效跟进、变更如何应对、风险如何应对、复盘如何开展，以及推荐给大家实用的项目管理工具包。\u003c/p\u003e\n\u003ch2\u003e课程收获\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e项目管理基础理念活学活用\u003c/li\u003e\n\u003cli\u003e项目管理实战思路初步涉猎\u003c/li\u003e\n\u003cli\u003e大型专项实战经验一站式体验\u003c/li\u003e\n\u003cli\u003e实用的项目管理工具/模板获取\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e讲师介绍\u003c/h2\u003e\n\u003cp\u003e\u003cimg src=\"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7b42e203a17437f9e8e2888e54a86f2~tplv-k3u1fbpfcp-5.jpeg?\" alt=\"1.png\"\u003e\u003c/p\u003e\n\u003ch2\u003e学习路径\u003c/h2\u003e\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\u003ctable\u003e\u003cthead\u003e\u003ctr\u003e\u003cth align=\"center\"\u003e学习模块\u003c/th\u003e\u003cth align=\"center\"\u003e合辑推荐\u003c/th\u003e\u003cth align=\"left\"\u003e主要内容\u003c/th\u003e\u003cth align=\"center\"\u003e状态\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块一\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/course/bytetech/7181363006335352890?from_page=course_list_page\"\u003e从理论到实践\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003e五大过程组/十大知识领域、敏捷管理、项目启动会\u003c/td\u003e\u003ctd align=\"center\"\u003e已上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块二\u003c/td\u003e\u003ctd align=\"center\"\u003e实战进阶\u003c/td\u003e\u003ctd align=\"left\"\u003e大型专项管理、时间管理、高质量交付、横向安全专项\u003c/td\u003e\u003ctd align=\"center\"\u003e待上线\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\n\u003ch2\u003e适宜人群\u003c/h2\u003e\n\u003col\u003e\n\u003cli\u003e有一定项目管理理论基础，但对于理论如何指导实际项目比较迷茫的同学\u003c/li\u003e\n\u003cli\u003e有一定项目管理实践经验，但遇到较多项目管理痛点的同学\u003c/li\u003e\n\u003cli\u003e无项目管理理论基础、实践经验，但对于项目管理感兴趣的或希望获得实用项目管理工具包的任何同学\u003c/li\u003e\n\u003c/ol\u003e\n\u003ch2\u003e学习说明\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e「项目管理 - 从理论到实践」系列课为会员专享，开通会员即可解锁全部章节；\u003c/li\u003e\n\u003cli\u003e本合辑为视频学习形式，\u003cstrong\u003e共计 8 节课程\u003c/strong\u003e，目前已全部更新完成；\u003c/li\u003e\n\u003cli\u003e课程讲解过程中有诸多实战，单节课程简介中均已提供相关工具下载地址，观看前请仔细阅读，提前配置环境；\u003c/li\u003e\n\u003cli\u003e字节内部课课程版权归字节跳动所有，任何机构、媒体、网站或个人未经本网协议授权不得转载、链接、转贴或以其他方式复制发布/发表，违者将依法追究责任；\u003c/li\u003e\n\u003cli\u003e在课程学习过程中，如发现任何涉及侵权或其他问题，请邮件联系 \u003ca href=\"mailto:bytetech@bytedance.com\"\u003ebytetech@bytedance.com\u003c/a\u003e；\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://wj.toutiao.com/q/196923/4RZ5XA84/b175/#/\"\u003e你的建议对我们至关重要，此处记录你对字节内部课的体验。\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e字节内部课\u003c/h2\u003e\n\u003cp\u003e作为一家技术驱动的互联网公司，2012 年创立至今，字节跳动业务快速发展，背后离不开久历经技术实战考验的技术团队。过去数年，\u003cstrong\u003e字节跳动内部技术社区 ByteTech\u003c/strong\u003e 基于公司经典实战案例，沉淀了一系列技术研发培训课程，建立了一套经过验证的技术人才培养体系。\u003c/p\u003e\n\u003cp\u003e“字节内部课”是 \u003cstrong\u003eByteTech 联合掘金课程团队\u003c/strong\u003e，基于字节跳动内部培训体系，倾心精选、打磨字节跳动内部优质技术研发培训课程后推出的系列技术实战课程。希望帮助更多技术同学近距离了解、学习来自字节跳动一线工程师的项目实战经验、系统技术知识。\u003c/p\u003e"
            },
            "parent_id": "0",
            "parent_type": 0
          },
          "categories": [
            {
              "category_id": "6809637776263217160",
              "name": "代码人生",
              "parent_id": "0",
              "create_time": 1662535951,
              "update_time": 1666868475,
              "op_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "rank": 0,
              "category_url": ""
            }
          ],
          "tags": [
            {
              "tag_id": "6809641183699009550",
              "name": "团队管理",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            }
          ]
        },
        {
          "content": {
            "item_id": "7181341416323285047",
            "item_type": 60,
            "publish_time": 1672146103,
            "name": "Android 入门 - Android  专业技能篇",
            "abstract": "由表及里，学习 Top 级团队对 App 性能问题的体系化经验与方案",
            "cover_image": {
              "key": "",
              "url": "/mock/4fd90e47eece4aaf80f2ecde8136b5f8~tplv-k3u1fbpfcp-5.jpeg",
              "size": 0,
              "mime_type": "",
              "rid": ""
            },
            "mime_type": "markdown",
            "content": "",
            "resource": {},
            "extra": {
              "course_package": {
                "items": [
                  {
                    "title": "架构面临的问题和常见架构手段",
                    "item_id": 7181340344204984377,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "架构演进举例与架构师的成长之路",
                    "item_id": 7181341933204652088,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "性能优化基本情况介绍",
                    "item_id": 7181343275541315644,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "最佳工具选型",
                    "item_id": 7181343276279496760,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "如何优化 - 方法论解析",
                    "item_id": 7181343815410647077,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "打开ART 虚拟机大门 - 对象篇",
                    "item_id": 7181343960420319293,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "打开 ART 虚拟机大门 - 执行篇",
                    "item_id": 7181361728809074743,
                    "item_type": 62,
                    "version": 1
                  }
                ],
                "producer": "徐磊",
                "duration": 12345930,
                "chapter_count": 7
              },
              "html_content": "\u003ch2\u003e课程介绍\u003c/h2\u003e\n\u003cp\u003e在 Android 日常开发中，各种 Bug 早已成为家常便饭，架构面临的问题有哪些、如何实现架构优化升级、性能优化怎么做、有哪些性能优化工具、场景应用是怎么样？等等问题屡见不鲜，本合辑课程将从架构、性能优化、虚拟机等多个维度进行原理剖析以及解决实战，让你的技术能力和优化经验得到前所未有的提升。带你吃透 Android 重要的专业技能，使你的 App 达到极致的流畅与稳定。\u003c/p\u003e\n\u003ch2\u003e课程收获\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e深入浅出，知悉架构面临的问题和常见架构手段\u003c/li\u003e\n\u003cli\u003e逐个击破，掌握 Android App 性能优化的各个环节\u003c/li\u003e\n\u003cli\u003e循序渐进，打开ART 虚拟机大门\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e讲师介绍\u003c/h2\u003e\n\u003cp\u003e\u003cimg src=\"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e4346fd9dba64c03bea62d8259d9a7b6~tplv-k3u1fbpfcp-5.jpeg?\" alt=\"1.png\"\u003e\u003c/p\u003e\n\u003ch2\u003e学习路径\u003c/h2\u003e\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\u003ctable\u003e\u003cthead\u003e\u003ctr\u003e\u003cth align=\"center\"\u003e学习模块\u003c/th\u003e\u003cth align=\"center\"\u003e合辑推荐\u003c/th\u003e\u003cth align=\"left\"\u003e主要内容\u003c/th\u003e\u003cth align=\"center\"\u003e状态\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块一\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/course/bytetech/7158718464956792845?from_page=course_list_page\"\u003e基础知识篇\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003e内外交付、通信组件、UI、多媒体、端智能\u003c/td\u003e\u003ctd align=\"center\"\u003e已上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块二\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/course/bytetech/7181341416323285047?from_page=course_list_page\"\u003e专业技能篇\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003e架构设计、性能优化、ART\u003c/td\u003e\u003ctd align=\"center\"\u003e已上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块三\u003c/td\u003e\u003ctd align=\"center\"\u003e大咖分享\u003c/td\u003e\u003ctd align=\"left\"\u003eRD 研发素养、研发素养\u003c/td\u003e\u003ctd align=\"center\"\u003e待上线\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\n\u003ch2\u003e适宜人群\u003c/h2\u003e\n\u003col\u003e\n\u003cli\u003e初阶工程师或对 Android 开发感兴趣同学，具备一定自学能力\u003c/li\u003e\n\u003cli\u003e想要学习 Android 性能优化的同学\u003c/li\u003e\n\u003cli\u003e具备基本的 Android 开发经验，知悉基本技术名词\u003c/li\u003e\n\u003c/ol\u003e\n\u003ch2\u003e学习说明\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e「Android 入门 - Android 专业技能」系列课为会员专享，开通会员即可解锁全部章节；\u003c/li\u003e\n\u003cli\u003e本合辑为视频学习形式，\u003cstrong\u003e共计 7 节课程\u003c/strong\u003e，目前已全部更新完成；\u003c/li\u003e\n\u003cli\u003e课程讲解过程中有诸多实战，单节课程简介中均已提供相关工具下载地址，观看前请仔细阅读，提前配置环境；\u003c/li\u003e\n\u003cli\u003e字节内部课课程版权归字节跳动所有，任何机构、媒体、网站或个人未经本网协议授权不得转载、链接、转贴或以其他方式复制发布/发表，违者将依法追究责任；\u003c/li\u003e\n\u003cli\u003e在课程学习过程中，如发现任何涉及侵权或其他问题，请邮件联系 \u003ca href=\"mailto:bytetech@bytedance.com\"\u003ebytetech@bytedance.com\u003c/a\u003e；\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://wj.toutiao.com/q/196923/4RZ5XA84/b175/#/\"\u003e你的建议对我们至关重要，此处记录你对字节内部课的体验。\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e字节内部课\u003c/h2\u003e\n\u003cp\u003e作为一家技术驱动的互联网公司，2012 年创立至今，字节跳动业务快速发展，背后离不开久历经技术实战考验的技术团队。过去数年，\u003cstrong\u003e字节跳动内部技术社区 ByteTech\u003c/strong\u003e 基于公司经典实战案例，沉淀了一系列技术研发培训课程，建立了一套经过验证的技术人才培养体系。\u003c/p\u003e\n\u003cp\u003e“字节内部课”是 \u003cstrong\u003eByteTech 联合掘金课程团队\u003c/strong\u003e，基于字节跳动内部培训体系，倾心精选、打磨字节跳动内部优质技术研发培训课程后推出的系列技术实战课程。希望帮助更多技术同学近距离了解、学习来自字节跳动一线工程师的项目实战经验、系统技术知识。\u003c/p\u003e"
            },
            "parent_id": "0",
            "parent_type": 0
          },
          "categories": [
            {
              "category_id": "6809635626879549454",
              "name": "Android",
              "parent_id": "0",
              "create_time": 1662535951,
              "update_time": 1665369476,
              "op_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "rank": 0,
              "category_url": ""
            }
          ],
          "tags": [
            {
              "tag_id": "6809640501776482317",
              "name": "架构",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809641167680962568",
              "name": "性能优化",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809640400832167949",
              "name": "Android",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            }
          ]
        },
        {
          "content": {
            "item_id": "7180922988034785336",
            "item_type": 60,
            "publish_time": 1672146062,
            "name": "前端入门 - 工具篇",
            "abstract": "掌握前端开发必备技能，深化工程化思维",
            "cover_image": {
              "key": "",
              "url": "/mock/4fd90e47eece4aaf80f2ecde8136b5f8~tplv-k3u1fbpfcp-5.jpeg",
              "size": 0,
              "mime_type": "",
              "rid": ""
            },
            "mime_type": "markdown",
            "content": "",
            "resource": {},
            "extra": {
              "course_package": {
                "items": [
                  {
                    "title": "前端开发调试之 PC 端调试",
                    "item_id": 7181029728822755385,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "前端开发调试之移动端调试",
                    "item_id": 7181053070262943804,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "React 的历史与应用 ",
                    "item_id": 7181287649443840061,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "React 的设计思路",
                    "item_id": 7181297907503464509,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "React （hooks）的写法与 React 实现",
                    "item_id": 7181298684229845053,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "React 状态管理库与应用级框架科普",
                    "item_id": 7181301644058067001,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Webpack 定义解析",
                    "item_id": 7181287647778701369,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Webpack 使用方法",
                    "item_id": 7181301869854064701,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "理解 Loader ",
                    "item_id": 7181293388048629818,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "理解插件",
                    "item_id": 7181336222915592252,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Vite 基本概要",
                    "item_id": 7181337230214955063,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Vite 上手实战与架构解析",
                    "item_id": 7181336006816170021,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Vite 进阶路线",
                    "item_id": 7181337621052784697,
                    "item_type": 62,
                    "version": 1
                  }
                ],
                "producer": "梁幸芝、月影",
                "duration": 22003200,
                "chapter_count": 13
              },
              "html_content": "\u003ch2\u003e课程介绍\u003c/h2\u003e\n\u003cp\u003e当前的技术环境下，无论是前端面试还是日常的开发工作中，几乎必会出现 React、 Webpack 与 Vite 等相关内容，本课程中，讲师们通过结合自身项目开发实战，从基础原理逐步深入讲解前端工程调试与前端框架中的主流技术以及实战中的应用，让同学们全方位理解应用 React 构建项目，直接上手初级以上难度项目开发。\u003c/p\u003e\n\u003cp\u003e与此同时，课程还将设置 Webpack 专题内容，通过一系列由浅入深的内容设计，帮助大家提升对 Webpack 的理解，并且能在实际业务中加以应用。\u003c/p\u003e\n\u003ch2\u003e课程收获\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e深入原理层面解读前端框架工具，带你认识响应式系统与 React\u003c/li\u003e\n\u003cli\u003e践行前端工程化，掌握 Webpack 知识及开发应用\u003c/li\u003e\n\u003cli\u003e走进 Vite，了解下一代前端开发与构建工具\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e讲师介绍\u003c/h2\u003e\n\u003cp\u003e\u003cimg src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42f4a0f85dd748a18f62eba5372e14ad~tplv-k3u1fbpfcp-5.jpeg?\" alt=\"1.png\"\u003e\u003c/p\u003e\n\u003ch2\u003e学习路径\u003c/h2\u003e\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\u003ctable\u003e\u003cthead\u003e\u003ctr\u003e\u003cth align=\"center\"\u003e学习模块\u003c/th\u003e\u003cth align=\"center\"\u003e合辑推荐\u003c/th\u003e\u003cth align=\"center\"\u003e主要内容\u003c/th\u003e\u003cth align=\"center\"\u003e状态\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块一\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/course/bytetech/7145675320224383006?from_page=course_list_page\"\u003e基础语言篇\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"center\"\u003eHTML、CSS、JavaScript 代码规范\u003c/td\u003e\u003ctd align=\"center\"\u003e已上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块二\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/course/bytetech/7169405808147431455?from_page=course_list_page\"\u003e理论篇\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"center\"\u003eHTTP 协议、TypeScript、Web 开发、前端设计模式\u003c/td\u003e\u003ctd align=\"center\"\u003e已上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块三\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/course/bytetech/7180922988034785336?from_page=course_list_page\"\u003e工具篇\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"center\"\u003eReact、Webpack、Vite 知识体系\u003c/td\u003e\u003ctd align=\"center\"\u003e已上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块四\u003c/td\u003e\u003ctd align=\"center\"\u003e实战篇\u003c/td\u003e\u003ctd align=\"center\"\u003eWebGL、动画实现、Node.js\u003c/td\u003e\u003ctd align=\"center\"\u003e待上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块五\u003c/td\u003e\u003ctd align=\"center\"\u003e选修篇\u003c/td\u003e\u003ctd align=\"center\"\u003eWeb 与多媒体、数据可视化、小游戏开发\u003c/td\u003e\u003ctd align=\"center\"\u003e待上线\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\n\u003ch2\u003e适宜人群\u003c/h2\u003e\n\u003col\u003e\n\u003cli\u003e应届生，对业内前端开发工作好奇同学可作为参考学习\u003c/li\u003e\n\u003cli\u003e前端初阶工程师或对前端开发感兴趣同学\u003c/li\u003e\n\u003cli\u003e了解 Html/Css 基础知识，能够进行简单代码操作\u003c/li\u003e\n\u003c/ol\u003e\n\u003ch2\u003e学习说明\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e「前端入门 - 理论篇 」为会员专享，开通会员即可解锁全部章节；\u003c/li\u003e\n\u003cli\u003e本合辑为视频学习形式，\u003cstrong\u003e共计 13 节课程\u003c/strong\u003e，目前已全部更新完成；\u003c/li\u003e\n\u003cli\u003e课程讲解过程中有诸多实战，单节课程简介中均已提供相关工具下载地址，观看前请仔细阅读，提前配置环境；\u003c/li\u003e\n\u003cli\u003e字节内部课课程版权归字节跳动所有，任何机构、媒体、网站或个人未经本网协议授权不得转载、链接、转贴或以其他方式复制发布/发表，违者将依法追究责任；\u003c/li\u003e\n\u003cli\u003e在课程学习过程中，如发现任何涉及侵权或其他问题，请邮件联系 \u003ca href=\"mailto:bytetech@bytedance.com\"\u003ebytetech@bytedance.com\u003c/a\u003e；\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://wj.toutiao.com/q/196923/4RZ5XA84/b175/#/\"\u003e你的建议对我们至关重要，此处记录你对字节内部课的体验。\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e字节内部课\u003c/h2\u003e\n\u003cp\u003e作为一家技术驱动的互联网公司，2012 年创立至今，字节跳动业务快速发展，背后离不开久历经技术实战考验的技术团队。过去数年，\u003cstrong\u003e字节跳动内部技术社区 ByteTech\u003c/strong\u003e 基于公司经典实战案例，沉淀了一系列技术研发培训课程，建立了一套经过验证的技术人才培养体系。\u003c/p\u003e\n\u003cp\u003e“字节内部课”是 \u003cstrong\u003eByteTech 联合掘金课程团队\u003c/strong\u003e，基于字节跳动内部培训体系，倾心精选、打磨字节跳动内部优质技术研发培训课程后推出的系列技术实战课程。希望帮助更多技术同学近距离了解、学习来自字节跳动一线工程师的项目实战经验、系统技术知识。\u003c/p\u003e"
            },
            "parent_id": "0",
            "parent_type": 0
          },
          "categories": [
            {
              "category_id": "6809637767543259144",
              "name": "前端",
              "parent_id": "0",
              "create_time": 1662535951,
              "update_time": 1665369476,
              "op_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "rank": 0,
              "category_url": ""
            }
          ],
          "tags": [
            {
              "tag_id": "6809640528267706382",
              "name": "Webpack",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6930559450847985672",
              "name": "Vite",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809640402103042061",
              "name": "前端框架",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            }
          ]
        },
        {
          "content": {
            "item_id": "7169476493125353485",
            "item_type": 60,
            "publish_time": 1661961600,
            "name": "FaaS 核心技术与最佳实践",
            "abstract": "走进大厂的 FaaS 落地实践，快速掌握技术新潮流",
            "cover_image": {
              "key": "",
              "url": "/mock/4fd90e47eece4aaf80f2ecde8136b5f8~tplv-k3u1fbpfcp-5.jpeg",
              "size": 0,
              "mime_type": "",
              "rid": ""
            },
            "mime_type": "markdown",
            "content": "",
            "resource": {},
            "extra": {
              "course_package": {
                "items": [
                  {
                    "title": "Serverless 函数计算平台在字节的应用实践 ",
                    "item_id": 7169476493133742116,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "ByteFaaS 数据面架构介绍  ",
                    "item_id": 7169477246791614495,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "FaaS 极致冷启动及异步模式介绍",
                    "item_id": 7169473625232244744,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "ByteFaaS MQ 触发器场景的最佳实践",
                    "item_id": 7169477550312751134,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "FaaS Native: The Evolution From PaaS To FaaS",
                    "item_id": 7169477872778739725,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "ByteFaaS Worker 快速入门实践",
                    "item_id": 7169479453700489230,
                    "item_type": 62,
                    "version": 1
                  }
                ],
                "producer": "杨华辉",
                "duration": 14256520,
                "chapter_count": 6
              },
              "html_content": "\u003ch2\u003e课程介绍\u003c/h2\u003e\n\u003cp\u003e在云原生时代浪潮下，Serverless 聚焦业务逻辑，成为科技的宠儿，更好地实现服务器配置、维护、更新、扩展和容量规划等工作，减少工程链路消耗和运维成本，用最小的成本透出业务领域能力，赋能业务增值。\u003c/p\u003e\n\u003cp\u003e其中 FaaS 作为各个基础组件的粘合剂，支撑了Serverless 的计算体系，是整个体系最重要的组成部分。在此背景之下，本合辑课程将立足 \u003cstrong\u003eFaaS 核心的技术原理，分享公司目前在 FaaS 领域的落地实践\u003c/strong\u003e，带你开阔技术视野，见证函数计算更多的可能性。\u003c/p\u003e\n\u003ch2\u003e课程收获\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e深入浅出 Serverless 技术理念，知悉函数计算应用场景\u003c/li\u003e\n\u003cli\u003e详细解读 FaaS 的核心数据面，掌握数据面整体架构\u003c/li\u003e\n\u003cli\u003e熟悉冷启动发生的背景，加深对异步模式的架构和使用场景认知\u003c/li\u003e\n\u003cli\u003e走进字节 FaaS 中的超大流量场景， 收获消息处理的高效率法则\u003c/li\u003e\n\u003cli\u003e分享微服务 Serverless 技术热点， 了解 PaaS 到 FaaS 的演进之路\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e讲师介绍\u003c/h2\u003e\n\u003cp\u003e\u003cimg src=\"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4cb46604b8bd457fa1a3c5cbd4f36bf3~tplv-k3u1fbpfcp-5.jpeg?\" alt=\"1.png\"\u003e\u003c/p\u003e\n\u003ch2\u003e适宜人群\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e想要了解公司级 FaaS 领域的实践，提高研发效能\u003c/li\u003e\n\u003cli\u003e想要扩展技术知识面的前后端开发工作者\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e学习说明\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e「走进 Faas 系列」为会员专享，开通会员即可解锁全部章节；\u003c/li\u003e\n\u003cli\u003e本合辑为视频学习形式，共计 6 节课程，目前已全部更新完成；\u003c/li\u003e\n\u003cli\u003e课程讲解过程中有诸多实战，单节课程简介中均已提供相关工具下载地址，观看前请仔细阅读，提前配置环境；\u003c/li\u003e\n\u003cli\u003e字节内部课课程版权归字节跳动所有，任何机构、媒体、网站或个人未经本网协议授权不得转载、链接、转贴或以其他方式复制发布/发表，违者将依法追究责任；\u003c/li\u003e\n\u003cli\u003e在课程学习过程中，如发现任何涉及侵权或其他问题，请邮件联系 \u003ca href=\"mailto:bytetech@bytedance.com\"\u003ebytetech@bytedance.com\u003c/a\u003e；\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://wj.toutiao.com/q/196923/4RZ5XA84/b175/#/\"\u003e你的建议对我们至关重要，此处记录你对字节内部课的体验。\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e字节内部课\u003c/h2\u003e\n\u003cp\u003e作为一家技术驱动的互联网公司，2012 年创立至今，字节跳动业务快速发展，背后离不开久历经技术实战考验的技术团队。过去数年，\u003cstrong\u003e字节跳动内部技术社区 ByteTech\u003c/strong\u003e 基于公司经典实战案例，沉淀了一系列技术研发培训课程，建立了一套经过验证的技术人才培养体系。\u003c/p\u003e\n\u003cp\u003e“字节内部课”是 \u003cstrong\u003eByteTech 联合掘金课程团队\u003c/strong\u003e，基于字节跳动内部培训体系，倾心精选、打磨字节跳动内部优质技术研发培训课程后推出的系列技术实战课程。希望帮助更多技术同学近距离了解、学习来自字节跳动一线工程师的项目实战经验、系统技术知识。\u003c/p\u003e"
            },
            "parent_id": "0",
            "parent_type": 0
          },
          "categories": [
            {
              "category_id": "6809637769959178254",
              "name": "后端",
              "parent_id": "0",
              "create_time": 1662535951,
              "update_time": 1665369476,
              "op_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "rank": 0,
              "category_url": ""
            }
          ],
          "tags": [
            {
              "tag_id": "6809641116783083528",
              "name": "Serverless",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            }
          ]
        },
        {
          "content": {
            "item_id": "7169470135168663582",
            "item_type": 60,
            "publish_time": 1661961600,
            "name": "大数据 - 大数据存储",
            "abstract": "多场景数据库解决方案详解，升级存储设计能力",
            "cover_image": {
              "key": "",
              "url": "/mock/4fd90e47eece4aaf80f2ecde8136b5f8~tplv-k3u1fbpfcp-5.jpeg",
              "size": 0,
              "mime_type": "",
              "rid": ""
            },
            "mime_type": "markdown",
            "content": "",
            "resource": {},
            "extra": {
              "course_package": {
                "items": [
                  {
                    "title": "HDFS 基本情况介绍",
                    "item_id": 7169471346382995486,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "HDFS 核心组件与作用",
                    "item_id": 7169473626964492325,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "HDFS 关键设计和优势",
                    "item_id": 7169477245936304141,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "HDFS 在大数据生态中的应用",
                    "item_id": 7169474123020632071,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "元数据服务高可用的需求与实现",
                    "item_id": 7169478406554763295,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "数据存储高可用机制解读",
                    "item_id": 7169481307742240782,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "元数据高扩展性",
                    "item_id": 7169481307741913096,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "存储数据高扩展性",
                    "item_id": 7169479574856663070,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "HBase 的适用场景和数据模型",
                    "item_id": 7169483652185718798,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "HBase 的整体架构和模块设计分析",
                    "item_id": 7169495451094220831,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "HBase 在大数据场景下的定位及支撑",
                    "item_id": 7169480028945252360,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "HBase 大规模实战中的最佳实践",
                    "item_id": 7169500354243985415,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "数据湖发展三阶段：从 Hadoop 到湖仓一体",
                    "item_id": 7169505231083372551,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "数据湖的核心技术解读",
                    "item_id": 7169505231095463973,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Iceberg \u0026 Hudi \u0026 Delta Lake 项目介绍",
                    "item_id": 7169505507919527950,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "不同数据湖场景下的技术选型",
                    "item_id": 7169506512748937224,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "消息队列概述",
                    "item_id": 7169507974535184421,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Kafka 系统详解 ",
                    "item_id": 7169508847059468319,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Pulsar架构详解与 Kafka 对比分析",
                    "item_id": 7169501303519838215,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "OLTP VS OLAP：基本原理和应用场景",
                    "item_id": 7169502668929368100,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Parquet 原理详解",
                    "item_id": 7169511892870758413,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "ORC 原理详解和列寸的演进",
                    "item_id": 7169509854363516935,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "LSMT 与存储引擎介绍",
                    "item_id": 7169510306941501448,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "LSMT 存储引擎的优势与实现分析",
                    "item_id": 7169520566875979790,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "LSMT 模型理论分析",
                    "item_id": 7169530686871699463,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "LSMT 存储引擎调优以及案例介绍",
                    "item_id": 7169536955179499556,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "分布式系统的挑战与优化要点",
                    "item_id": 7169522099449495583,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "走进一致性与共识算法",
                    "item_id": 7169529265619206151,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Raft 的工作原理与安全性验证",
                    "item_id": 7169535555972431886,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "KV 系统的重构与共识算法的未来",
                    "item_id": 7169540747392188424,
                    "item_type": 62,
                    "version": 1
                  }
                ],
                "producer": "方勇",
                "duration": 37994921,
                "chapter_count": 30
              },
              "html_content": "\u003ch2\u003e课程介绍\u003c/h2\u003e\n\u003cp\u003e数据的存储关乎所开发的程序是否可以稳定高效的运行，在整个大数据体系中起着至关重要的作用，对于合格的后端工程师而言，掌握常规的 CRUD 已然不够，更需要懂各种数据库产品的优劣及适用场景，并能在适合的业务实践中准确选取合适的产品并应用。\u003c/p\u003e\n\u003cp\u003e本合辑课程中，讲师综合日常业务经验，带你深入理解 \u003cstrong\u003eHDFS、HBase、Kafka、数据湖\u003c/strong\u003e等相关技术原理与最佳实践，帮助同学在面临差异化的业务场景时，通过不同策略实现存储的更优解。\u003c/p\u003e\n\u003ch2\u003e课程收获\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e了解企业中海量数据的计算方法，学习支持海量数据存储和读写的方案\u003c/li\u003e\n\u003cli\u003e学习分布式存储领域的前沿技术，掌握不同业务场景的存储选型策略\u003c/li\u003e\n\u003cli\u003e深入数据库解决方案内部原理，构建数据库结构优化的调整思路\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e讲师介绍\u003c/h2\u003e\n\u003cp\u003e\u003cimg src=\"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69aa75df109c4745bf29e3f435e93a33~tplv-k3u1fbpfcp-5.jpeg?\" alt=\"1.png\"\u003e\u003c/p\u003e\n\u003ch2\u003e学习路径\u003c/h2\u003e\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\u003ctable\u003e\u003cthead\u003e\u003ctr\u003e\u003cth align=\"center\"\u003e学习模块\u003c/th\u003e\u003cth align=\"center\"\u003e合辑推荐\u003c/th\u003e\u003cth align=\"left\"\u003e主要内容\u003c/th\u003e\u003cth align=\"center\"\u003e状态\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块一\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/course/bytetech/7158731549116989453?from_page=course_list_page\"\u003e开发与计算\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003eFlink、流计算、Spark 、Shuffle、Presto\u003c/td\u003e\u003ctd align=\"center\"\u003e已上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块二\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/course/bytetech/7169470135168663582?from_page=course_list_page\"\u003e大数据存储\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003eHDFS、HBase、数据湖、Kafka、高性能列式存储\u003c/td\u003e\u003ctd align=\"center\"\u003e已上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块三\u003c/td\u003e\u003ctd align=\"center\"\u003e资源和调度\u003c/td\u003e\u003ctd align=\"left\"\u003eYarn、资源管理、Kubernetes、调度\u003c/td\u003e\u003ctd align=\"center\"\u003e待上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块四\u003c/td\u003e\u003ctd align=\"center\"\u003e数据应用\u003c/td\u003e\u003ctd align=\"left\"\u003e数据中心、大数据可视化\u003c/td\u003e\u003ctd align=\"center\"\u003e待上线\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\n\u003ch2\u003e适宜人群\u003c/h2\u003e\n\u003col\u003e\n\u003cli\u003e希望学习多种数据库解决方案，提升后端研发能力的工程师\u003c/li\u003e\n\u003cli\u003e有相关研发经验，未来准备从事大数据相关岗位的同学\u003c/li\u003e\n\u003cli\u003e对大数据感兴趣的软件行业从业者，希望在大数据领域有所提升\u003c/li\u003e\n\u003c/ol\u003e\n\u003ch2\u003e学习说明\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e「大数据 - 存储」系列课为会员专享，开通会员即可解锁全部章节；\u003c/li\u003e\n\u003cli\u003e本合辑为视频学习形式，共计 30 节课程，目前已全部更新完成；\u003c/li\u003e\n\u003cli\u003e课程讲解过程中有诸多实战，单节课程简介中均已提供相关工具下载地址，观看前请仔细阅读，提前配置环境；\u003c/li\u003e\n\u003cli\u003e字节内部课课程版权归字节跳动所有，任何机构、媒体、网站或个人未经本网协议授权不得转载、链接、转贴或以其他方式复制发布/发表，违者将依法追究责任；\u003c/li\u003e\n\u003cli\u003e在课程学习过程中，如发现任何涉及侵权或其他问题，请邮件联系 \u003ca href=\"mailto:bytetech@bytedance.com\"\u003ebytetech@bytedance.com\u003c/a\u003e；\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://wj.toutiao.com/q/196923/4RZ5XA84/b175/#/\"\u003e你的建议对我们至关重要，此处记录你对字节内部课的体验。\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e字节内部课\u003c/h2\u003e\n\u003cp\u003e作为一家技术驱动的互联网公司，2012 年创立至今，字节跳动业务快速发展，背后离不开久历经技术实战考验的技术团队。过去数年，\u003cstrong\u003e字节跳动内部技术社区 ByteTech\u003c/strong\u003e 基于公司经典实战案例，沉淀了一系列技术研发培训课程，建立了一套经过验证的技术人才培养体系。\u003c/p\u003e\n\u003cp\u003e“字节内部课”是 \u003cstrong\u003eByteTech 联合掘金课程团队\u003c/strong\u003e，基于字节跳动内部培训体系，倾心精选、打磨字节跳动内部优质技术研发培训课程后推出的系列技术实战课程。希望帮助更多技术同学近距离了解、学习来自字节跳动一线工程师的项目实战经验、系统技术知识。\u003c/p\u003e"
            },
            "parent_id": "0",
            "parent_type": 0
          },
          "categories": [
            {
              "category_id": "6809637769959178254",
              "name": "后端",
              "parent_id": "0",
              "create_time": 1662535951,
              "update_time": 1665369476,
              "op_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "rank": 0,
              "category_url": ""
            }
          ],
          "tags": [
            {
              "tag_id": "6809641131131797511",
              "name": "大数据",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809640600502009863",
              "name": "数据库",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809641166313619470",
              "name": "数据结构",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            }
          ]
        },
        {
          "content": {
            "item_id": "7169405808147431455",
            "item_type": 60,
            "publish_time": 1661961600,
            "name": "前端入门 - 理论篇",
            "abstract": "快速补足前端开发基础知识，知悉新时代研发法则",
            "cover_image": {
              "key": "",
              "url": "/mock/4fd90e47eece4aaf80f2ecde8136b5f8~tplv-k3u1fbpfcp-5.jpeg",
              "size": 0,
              "mime_type": "",
              "rid": ""
            },
            "mime_type": "markdown",
            "content": "",
            "resource": {},
            "extra": {
              "course_package": {
                "items": [
                  {
                    "title": "Web 开发基本情况介绍",
                    "item_id": 7168760826797817863,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Web 开发标准",
                    "item_id": 7169425175421812749,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "初识 HTTP 协议",
                    "item_id": 7169430296574558216,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "HTTP 协议的应用场景分析",
                    "item_id": 7169464204594937893,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "HTTP 协议实战分析",
                    "item_id": 7168791819554127908,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Web 开发安全 - 攻击篇",
                    "item_id": 7169430298457800717,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Web 开发安全 - 防御篇",
                    "item_id": 7169466760435859487,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "TypeScript 的发展与基本语法",
                    "item_id": 7169468133136564254,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "TypeScript 高级数据类型",
                    "item_id": 7169469668984356895,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "前端设计模式概述",
                    "item_id": 7169465286075088932,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "JavaScript 和前端框架中的设计模式",
                    "item_id": 7169471877549654023,
                    "item_type": 62,
                    "version": 1
                  }
                ],
                "producer": "梁幸芝、月影",
                "duration": 20202589,
                "chapter_count": 11
              },
              "html_content": "\u003ch2\u003e课程介绍\u003c/h2\u003e\n\u003cp\u003e前端开发是一个随着 Web 标准不断健全和完善而发展起来的职业，本合辑课程将结合现阶段前端研发的工作实践，对前端开发的基础理论进行解析，帮助同学们快速了解前端基础原理。\u003c/p\u003e\n\u003cp\u003e首先是从宏观的角度，带领大家一起回顾前端开发这一职业的起源和变迁，介绍前端开发的国际标准组织；其次是对 \u003cstrong\u003eHTTP 协议、前端常见的设计模式及 TS 语法与数据类型\u003c/strong\u003e进行解读，并且覆盖前端开发主要使用的工具和标准；与此同时，还将逐层深入探讨 \u003cstrong\u003eWeb 开发安全\u003c/strong\u003e，帮助同学夯实基础。\u003c/p\u003e\n\u003ch2\u003e课程收获\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e熟悉 HTTP 协议底层逻辑，掌握具体使用方法\u003c/li\u003e\n\u003cli\u003e了解前端主要设计模式，提升软件开发素质\u003c/li\u003e\n\u003cli\u003e掌握 TypeScript 的开发配置和各种常用工具\u003c/li\u003e\n\u003cli\u003e知悉前端开发的国际标准组织，收获参会妙招\u003c/li\u003e\n\u003cli\u003e多角度理解 Web 开发安全，建筑开发护城河\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e讲师介绍\u003c/h2\u003e\n\u003cp\u003e\u003cimg src=\"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6c8349a1ddc04eac90bc8ffc4d41bbcd~tplv-k3u1fbpfcp-5.jpeg?\" alt=\"1.png\"\u003e\u003c/p\u003e\n\u003ch2\u003e学习路径\u003c/h2\u003e\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\u003ctable\u003e\u003cthead\u003e\u003ctr\u003e\u003cth align=\"center\"\u003e学习模块\u003c/th\u003e\u003cth align=\"center\"\u003e合辑推荐\u003c/th\u003e\u003cth align=\"center\"\u003e主要内容\u003c/th\u003e\u003cth align=\"center\"\u003e状态\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块一\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/course/bytetech/7145675320224383006?from_page=course_list_page\"\u003e基础语言篇\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"center\"\u003eHTML、CSS、JavaScript 代码规范\u003c/td\u003e\u003ctd align=\"center\"\u003e已上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块二\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/course/bytetech/7169405808147431455?from_page=course_list_page\"\u003e理论篇\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"center\"\u003eHTTP 协议、TypeScript、Web 开发、前端设计模式\u003c/td\u003e\u003ctd align=\"center\"\u003e已上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块三\u003c/td\u003e\u003ctd align=\"center\"\u003e工具篇\u003c/td\u003e\u003ctd align=\"center\"\u003eReact、Webpack、Vite 知识体系\u003c/td\u003e\u003ctd align=\"center\"\u003e待上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块四\u003c/td\u003e\u003ctd align=\"center\"\u003e实战篇\u003c/td\u003e\u003ctd align=\"center\"\u003eWebGL、动画实现、Node.js\u003c/td\u003e\u003ctd align=\"center\"\u003e待上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块五\u003c/td\u003e\u003ctd align=\"center\"\u003e选修篇\u003c/td\u003e\u003ctd align=\"center\"\u003eWeb 与多媒体、数据可视化、小游戏开发\u003c/td\u003e\u003ctd align=\"center\"\u003e待上线\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\n\u003ch2\u003e适宜人群\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e知悉基本的代码操作，对 Web 开发感兴趣的同学\u003c/li\u003e\n\u003cli\u003e初入职场的前端工作者，期待学习业内较成熟的前端研发知识\u003c/li\u003e\n\u003cli\u003e有其他方向相关研发经验，后续希望涉足前端开发的人群\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e学习说明\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e「前端入门 - 理论篇 」为会员专享，开通会员即可解锁全部章节；\u003c/li\u003e\n\u003cli\u003e本合辑为视频学习形式，共计 11 节课程，目前已全部更新完成；\u003c/li\u003e\n\u003cli\u003e课程讲解过程中有诸多实战，单节课程简介中均已提供相关工具下载地址，观看前请仔细阅读，提前配置环境；\u003c/li\u003e\n\u003cli\u003e字节内部课课程版权归字节跳动所有，任何机构、媒体、网站或个人未经本网协议授权不得转载、链接、转贴或以其他方式复制发布/发表，违者将依法追究责任；\u003c/li\u003e\n\u003cli\u003e在课程学习过程中，如发现任何涉及侵权或其他问题，请邮件联系 \u003ca href=\"mailto:bytetech@bytedance.com\"\u003ebytetech@bytedance.com\u003c/a\u003e；\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://wj.toutiao.com/q/196923/4RZ5XA84/b175/#/\"\u003e你的建议对我们至关重要，此处记录你对字节内部课的体验。\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e字节内部课\u003c/h2\u003e\n\u003cp\u003e作为一家技术驱动的互联网公司，2012 年创立至今，字节跳动业务快速发展，背后离不开久历经技术实战考验的技术团队。过去数年，\u003cstrong\u003e字节跳动内部技术社区 ByteTech\u003c/strong\u003e 基于公司经典实战案例，沉淀了一系列技术研发培训课程，建立了一套经过验证的技术人才培养体系。\u003c/p\u003e\n\u003cp\u003e“字节内部课”是 \u003cstrong\u003eByteTech 联合掘金课程团队\u003c/strong\u003e，基于字节跳动内部培训体系，倾心精选、打磨字节跳动内部优质技术研发培训课程后推出的系列技术实战课程。希望帮助更多技术同学近距离了解、学习来自字节跳动一线工程师的项目实战经验、系统技术知识。\u003c/p\u003e"
            },
            "parent_id": "0",
            "parent_type": 0
          },
          "categories": [
            {
              "category_id": "6809637767543259144",
              "name": "前端",
              "parent_id": "0",
              "create_time": 1662535951,
              "update_time": 1665369476,
              "op_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "rank": 0,
              "category_url": ""
            }
          ],
          "tags": [
            {
              "tag_id": "6809640540305358862",
              "name": "HTTP",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809640407484334093",
              "name": "前端",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809640467731316749",
              "name": "设计模式",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            }
          ]
        },
        {
          "content": {
            "item_id": "7158731549116989453",
            "item_type": 60,
            "publish_time": 1661961600,
            "name": "大数据 - 开发与计算",
            "abstract": "原理出发，案例驱动，实现大数据能力进修",
            "cover_image": {
              "key": "",
              "url": "/mock/4fd90e47eece4aaf80f2ecde8136b5f8~tplv-k3u1fbpfcp-5.jpeg",
              "size": 0,
              "mime_type": "",
              "rid": ""
            },
            "mime_type": "markdown",
            "content": "",
            "resource": {},
            "extra": {
              "course_package": {
                "items": [
                  {
                    "title": "大数据体系介绍与 SQL 处理流程",
                    "item_id": 7158734438824673316,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "常见查询优化",
                    "item_id": 7158732397909917710,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "查询优化器的社区开源实践",
                    "item_id": 7158733062753222687,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "大数据前沿与未来趋势",
                    "item_id": 7158736115132792840,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": " Apache Flink 概述",
                    "item_id": 7158736400131555335,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Flink 整体架构",
                    "item_id": 7158737504865091592,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Flink 架构优化与项目实战",
                    "item_id": 7158736726331129869,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "数据流与动态表",
                    "item_id": 7158737211427389470,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Exactly - Once 和 Checkpoint",
                    "item_id": 7158737505871724552,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "端到端 Exactly-Once 实现",
                    "item_id": 7158738289321574437,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Flink 案例讲解",
                    "item_id": 7158737912216879140,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "流式计算的概述",
                    "item_id": 7158739210910826504,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Watermark 基本机制概述",
                    "item_id": 7158739853604028452,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Window 基本功能和高级优化",
                    "item_id": 7158738771171606535,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "流计算相关案例分析",
                    "item_id": 7158739547977678855,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "大数据处理引擎 Spark 介绍",
                    "item_id": 7158741929948086286,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "SparkCore 重要机制解析",
                    "item_id": 7158741814495674381,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "SparkSQL 原理解析",
                    "item_id": 7158741929956474911,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Spark 在业界的挑战与实践",
                    "item_id": 7158742357142143007,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Shuffle 概述",
                    "item_id": 7158742074299252743,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Shuffle 算子",
                    "item_id": 7158742932571455502,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Shuffle 过程",
                    "item_id": 7158742662160318478,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Push Shuffle",
                    "item_id": 7158743223504994317,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "大数据与 OLAP 的演进",
                    "item_id": 7158743837651763208,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Presto 基本原理与概念",
                    "item_id": 7158743583174950925,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Presto 重要机制",
                    "item_id": 7158744592194469919,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Presto 性能优化实战",
                    "item_id": 7159086448866492446,
                    "item_type": 62,
                    "version": 1
                  }
                ],
                "producer": "方勇",
                "duration": 41370617,
                "chapter_count": 27
              },
              "html_content": "\u003ch2\u003e课程介绍\u003c/h2\u003e\n\u003cp\u003e实时即未来，近年来实时计算的热度逐渐变高，大数据技术应用场景也日益丰富。但大家面临的真正问题是，如何在日新月异的大数据处理技术中“淘金”，找到最高效的方式解决实际问题。本合辑将重点介绍大数据主流框架/系统架构与原理，并结合企业真实的案例，帮助大家更深入理解分布式计算、存储和资源管理的设计原则，拓展技术视野，全面掌握大数据处理实战技能。\u003c/p\u003e\n\u003ch2\u003e课程收获\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e了解大数据业界发展现状，熟悉大数据主流工具和框架\u003c/li\u003e\n\u003cli\u003e掌握大数据处理技术核心知识点，学会大厂代码调优实践\u003c/li\u003e\n\u003cli\u003e增强对实际系统机制和原理的理解，增强解决实际问题的能力\u003c/li\u003e\n\u003cli\u003e快速入门 Flink ，轻松上手项目部署\u003c/li\u003e\n\u003cli\u003e夯实基础与应用，了解 Spark 原理与实践\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e讲师介绍\u003c/h2\u003e\n\u003cp\u003e\u003cimg src=\"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fb10120f195a46d4ae4c2fe1e7c25156~tplv-k3u1fbpfcp-5.jpeg?\" alt=\"3.png\"\u003e\u003c/p\u003e\n\u003ch2\u003e学习路径\u003c/h2\u003e\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\u003ctable\u003e\u003cthead\u003e\u003ctr\u003e\u003cth align=\"center\"\u003e学习模块\u003c/th\u003e\u003cth align=\"center\"\u003e合辑推荐\u003c/th\u003e\u003cth align=\"left\"\u003e主要内容\u003c/th\u003e\u003cth align=\"center\"\u003e状态\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块一\u003c/td\u003e\u003ctd align=\"center\"\u003e开发与计算\u003c/td\u003e\u003ctd align=\"left\"\u003eFlink、流计算、Spark 、Shuffle、Presto\u003c/td\u003e\u003ctd align=\"center\"\u003e已上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块二\u003c/td\u003e\u003ctd align=\"center\"\u003e大数据存储\u003c/td\u003e\u003ctd align=\"left\"\u003eHDFS、HBase、数据湖、Kafka、高性能列式存储\u003c/td\u003e\u003ctd align=\"center\"\u003e待上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块三\u003c/td\u003e\u003ctd align=\"center\"\u003e资源与调度\u003c/td\u003e\u003ctd align=\"left\"\u003eYarn、资源管理、Kubernetes、调度\u003c/td\u003e\u003ctd align=\"center\"\u003e待上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块四\u003c/td\u003e\u003ctd align=\"center\"\u003e数据应用\u003c/td\u003e\u003ctd align=\"left\"\u003e数据中心、大数据可视化\u003c/td\u003e\u003ctd align=\"center\"\u003e待上线\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\n\u003ch2\u003e适宜人群\u003c/h2\u003e\n\u003col\u003e\n\u003cli\u003e大数据开发初级工程师\u003c/li\u003e\n\u003cli\u003e对大数据技术架构和开源技术感兴趣的同学\u003c/li\u003e\n\u003cli\u003e具有 java/go 等编程语言基础，有意向转型大数据开发的同学\u003c/li\u003e\n\u003c/ol\u003e\n\u003ch2\u003e学习说明\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e「大数据 - 开发与计算」合辑为会员专享，开通会员即可解锁全部章节；\u003c/li\u003e\n\u003cli\u003e本合辑为视频学习形式，\u003cstrong\u003e共计 27 节课程\u003c/strong\u003e，目前已全部更新完成；\u003c/li\u003e\n\u003cli\u003e课程讲解过程中有诸多实战，单节课程简介中均已提供相关工具下载地址，观看前请仔细阅读，提前配置环境；\u003c/li\u003e\n\u003cli\u003e字节内部课课程版权归字节跳动所有，任何机构、媒体、网站或个人未经本网协议授权不得转载、链接、转贴或以其他方式复制发布/发表，违者将依法追究责任；\u003c/li\u003e\n\u003cli\u003e在课程学习过程中，如有任何问题，请邮件联系 \u003ca href=\"mailto:bytetech@bytedance.com\"\u003ebytetech@bytedance.com\u003c/a\u003e。\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://wj.toutiao.com/q/196923/4RZ5XA84/b175/#/\"\u003e你的建议对我们至关重要，此处记录你对字节内部课的体验。\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e字节内部课\u003c/h2\u003e\n\u003cp\u003e作为一家技术驱动的互联网公司，2012 年创立至今，字节跳动业务快速发展，背后离不开久历经技术实战考验的技术团队。过去数年，\u003cstrong\u003e字节跳动内部技术社区 ByteTech\u003c/strong\u003e 基于公司经典实战案例，沉淀了一系列技术研发培训课程，建立了一套经过验证的技术人才培养体系。\u003c/p\u003e\n\u003cp\u003e“字节内部课”是 \u003cstrong\u003eByteTech 联合掘金课程团队\u003c/strong\u003e，基于字节跳动内部培训体系，倾心精选、打磨字节跳动内部优质技术研发培训课程后推出的系列技术实战课程。希望帮助更多技术同学近距离了解、学习来自字节跳动一线工程师的项目实战经验、系统技术知识。\u003c/p\u003e"
            },
            "parent_id": "0",
            "parent_type": 0
          },
          "categories": [
            {
              "category_id": "6809637769959178254",
              "name": "后端",
              "parent_id": "0",
              "create_time": 1662535951,
              "update_time": 1665369476,
              "op_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "rank": 0,
              "category_url": ""
            }
          ],
          "tags": [
            {
              "tag_id": "6809641131131797511",
              "name": "大数据",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809640632470994951",
              "name": "Spark",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809640674011381768",
              "name": "SQL",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809640764851617800",
              "name": "Flink",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            }
          ]
        },
        {
          "content": {
            "item_id": "7158718464956792845",
            "item_type": 60,
            "publish_time": 1661961600,
            "name": "Android 入门 - 基础知识篇",
            "abstract": "聚焦 Android 基本原理，循序渐进理清系统底层问题",
            "cover_image": {
              "key": "",
              "url": "/mock/4fd90e47eece4aaf80f2ecde8136b5f8~tplv-k3u1fbpfcp-5.jpeg",
              "size": 0,
              "mime_type": "",
              "rid": ""
            },
            "mime_type": "markdown",
            "content": "",
            "resource": {},
            "extra": {
              "course_package": {
                "items": [
                  {
                    "title": "移动生态概览",
                    "item_id": 7158719111546011684,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Android 知识图谱 - 对外交付",
                    "item_id": 7158719725562757134,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Android知识图谱 - 对内交付",
                    "item_id": 7158718809745358862,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Android 系统和开发工具",
                    "item_id": 7158723350066364452,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Android 基础组件 - Activity",
                    "item_id": 7158724590972190757,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Android 五大基础组件",
                    "item_id": 7158725392134733861,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Android 通信组件",
                    "item_id": 7158725807304048671,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "UI 组件和布局",
                    "item_id": 7158725895711096845,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "UI 组件渲染",
                    "item_id": 7158726642179768350,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Android 交互",
                    "item_id": 7158727757399064590,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Android 动画设计",
                    "item_id": 7158728080318529543,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "自定义 UI",
                    "item_id": 7158725808771563550,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "网络通信",
                    "item_id": 7158728519835942943,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "数据存储与 Room 数据库",
                    "item_id": 7158729352241217567,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "视频的基本元素",
                    "item_id": 7158730638252572709,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "视频压缩",
                    "item_id": 7158727296063373325,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "直播推拉流协议",
                    "item_id": 7158730001355898887,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "端智能技术演进与实践",
                    "item_id": 7158732024205803557,
                    "item_type": 62,
                    "version": 1
                  }
                ],
                "producer": "徐磊",
                "duration": 29584747,
                "chapter_count": 18
              },
              "html_content": "\u003ch2\u003e课程介绍\u003c/h2\u003e\n\u003cp\u003eAndroid 是一种基于 Linux 的开源的操作系统，随着采用 Android 系统的手机、平板电脑、智能电视等数码产品逐渐增多，Android 开发工程师面临的考验也越来越多，除了基础的计算机技术知识要扎实之外，要根据各类企业、各类岗位的不同需求，补充与岗位相关的 Android 技术知识，不断积累开发项目经验。本合辑为 「客户端 - Android 入门」系列开篇之作，通过对 Android 基础知识的讲解，夯实基础，对 Android 实际研发有更为深入的了解。\u003c/p\u003e\n\u003ch2\u003e课程收获\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e化繁为简，轻松掌握 Android 系统总体框架\u003c/li\u003e\n\u003cli\u003e汇聚大厂实战，带你扫清实战盲区\u003c/li\u003e\n\u003cli\u003e了解 Android 中多进程开发的应用和关键技术\u003c/li\u003e\n\u003cli\u003e着重讲解 Android 系统底层原理，补齐开发框架层知识短板\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e讲师介绍\u003c/h2\u003e\n\u003cp\u003e\u003cimg src=\"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/089d14590af84ab881e8207966b9d323~tplv-k3u1fbpfcp-5.jpeg?\" alt=\"android .png\"\u003e\u003c/p\u003e\n\u003ch2\u003e学习路径\u003c/h2\u003e\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\u003ctable\u003e\u003cthead\u003e\u003ctr\u003e\u003cth align=\"center\"\u003e学习模块\u003c/th\u003e\u003cth align=\"center\"\u003e合辑推荐\u003c/th\u003e\u003cth align=\"left\"\u003e主要内容\u003c/th\u003e\u003cth align=\"center\"\u003e状态\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块一\u003c/td\u003e\u003ctd align=\"center\"\u003e基础知识篇\u003c/td\u003e\u003ctd align=\"left\"\u003e内外交付、通信组件、UI、多媒体、端智能\u003c/td\u003e\u003ctd align=\"center\"\u003e已上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块二\u003c/td\u003e\u003ctd align=\"center\"\u003e专业技能篇\u003c/td\u003e\u003ctd align=\"left\"\u003e架构设计、性能优化、ART\u003c/td\u003e\u003ctd align=\"center\"\u003e待上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块三\u003c/td\u003e\u003ctd align=\"center\"\u003e大咖分享\u003c/td\u003e\u003ctd align=\"left\"\u003eRD 研发素养、研发素养\u003c/td\u003e\u003ctd align=\"center\"\u003e待上线\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\n\u003ch2\u003e适宜人群\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e掌握 Android 基础语法，有一定的 Android 应用开发经验\u003c/li\u003e\n\u003cli\u003e有一定Android UI开发基础，能够在 Android 中加载处理图片资源\u003c/li\u003e\n\u003cli\u003e熟悉 Android Studio 基本用法，能使用 Android Studio 创建好一个空的 Activity\u003c/li\u003e\n\u003cli\u003e想要学习 Android 性能优化，期待了解大厂实践的同学\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e学习说明\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e「Android 基础知识篇」合辑为会员专享，开通会员即可解锁全部章节；\u003c/li\u003e\n\u003cli\u003e本合辑为视频学习形式，\u003cstrong\u003e共计 18 节课程\u003c/strong\u003e，目前已全部更新完成；\u003c/li\u003e\n\u003cli\u003e课程讲解过程中有诸多实战，单节课程简介中均已提供相关工具下载地址，观看前请仔细阅读，提前配置环境；\u003c/li\u003e\n\u003cli\u003e字节内部课课程版权归字节跳动所有，任何机构、媒体、网站或个人未经本网协议授权不得转载、链接、转贴或以其他方式复制发布/发表，违者将依法追究责任；\u003c/li\u003e\n\u003cli\u003e在课程学习过程中，如有任何问题，请邮件联系 \u003ca href=\"mailto:bytetech@bytedance.com\"\u003ebytetech@bytedance.com\u003c/a\u003e；\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://wj.toutiao.com/q/196923/4RZ5XA84/b175/#/\"\u003e你的建议对我们至关重要，此处记录你对字节内部课的体验。\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e字节内部课\u003c/h2\u003e\n\u003cp\u003e作为一家技术驱动的互联网公司，2012 年创立至今，字节跳动业务快速发展，背后离不开久历经技术实战考验的技术团队。过去数年，\u003cstrong\u003e字节跳动内部技术社区 ByteTech\u003c/strong\u003e 基于公司经典实战案例，沉淀了一系列技术研发培训课程，建立了一套经过验证的技术人才培养体系。\u003c/p\u003e\n\u003cp\u003e“字节内部课”是 \u003cstrong\u003eByteTech 联合掘金课程团队\u003c/strong\u003e，基于字节跳动内部培训体系，倾心精选、打磨字节跳动内部优质技术研发培训课程后推出的系列技术实战课程。希望帮助更多技术同学近距离了解、学习来自字节跳动一线工程师的项目实战经验、系统技术知识。\u003c/p\u003e"
            },
            "parent_id": "0",
            "parent_type": 0
          },
          "categories": [
            {
              "category_id": "6809635626879549454",
              "name": "Android",
              "parent_id": "0",
              "create_time": 1662535951,
              "update_time": 1665369476,
              "op_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "rank": 0,
              "category_url": ""
            }
          ],
          "tags": [
            {
              "tag_id": "6809640400832167949",
              "name": "Android",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            }
          ]
        },
        {
          "content": {
            "item_id": "7158705477671452680",
            "item_type": 60,
            "publish_time": 1661961600,
            "name": "iOS 入门 - iOS 语言基础",
            "abstract": "iOS 开发语言学习锦囊全收，轻松应对开发难题",
            "cover_image": {
              "key": "",
              "url": "/mock/4fd90e47eece4aaf80f2ecde8136b5f8~tplv-k3u1fbpfcp-5.jpeg",
              "size": 0,
              "mime_type": "",
              "rid": ""
            },
            "mime_type": "markdown",
            "content": "",
            "resource": {},
            "extra": {
              "course_package": {
                "items": [
                  {
                    "title": "初探 Xcode 工具",
                    "item_id": 7158706681629638664,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "认识 Objective-C 语言",
                    "item_id": 7158707966575640607,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Objective-C 的语言特性",
                    "item_id": 7158707967225757710,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Xcode 工具实战",
                    "item_id": 7158450136778014734,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "iOS 系统框架",
                    "item_id": 7158708957354131492,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Foundation 框架简介",
                    "item_id": 7158706245229084680,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "iOS 实战 - 断点与调试",
                    "item_id": 7158709439225298974,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Introduction - 内存管理机制与引用计数",
                    "item_id": 7158710032467492877,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "iOS 内存管理基本解读",
                    "item_id": 7158711788094259213,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Practical - 内存管理模式在代码中的实践",
                    "item_id": 7158709675981013023,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "闭包与 Block 基础",
                    "item_id": 7158711396601954317,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Block 内存管理及应用",
                    "item_id": 7158713548510593032,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "多线程基础概念",
                    "item_id": 7158714053328633886,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "多线程实现方案与 GCD",
                    "item_id": 7158713094402179086,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "线程安全与同步",
                    "item_id": 7158716565259550734,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Swift 优势和基础知识",
                    "item_id": 7158717075685376008,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "Swift 进阶知识",
                    "item_id": 7158718097795317768,
                    "item_type": 62,
                    "version": 1
                  },
                  {
                    "title": "SwiftUI 的创建与布局",
                    "item_id": 7158715748062658591,
                    "item_type": 62,
                    "version": 1
                  }
                ],
                "producer": "陈壬",
                "duration": 20251505,
                "chapter_count": 18
              },
              "html_content": "\u003ch2\u003e课程介绍\u003c/h2\u003e\n\u003cp\u003e本合辑为「iOS 入门」系列课的子模块，本模块主要围绕 \u003cstrong\u003eiOS 开发语言\u003c/strong\u003e展开，一众优秀开发者深入业务，沉淀经验，带领你从最基础的开始，一步一步记录一个最简单的 \u003cstrong\u003eiOS 应用从创建到运行\u003c/strong\u003e的全过程，课程中将会穿插很多语言相关知识及实际业务难题，帮助更多的开发爱好者更快、更好地进入 iOS 开发殿堂。\u003c/p\u003e\n\u003ch2\u003e课程收获\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e熟悉 Xcode 及 OC ，轻松上手工具操作\u003c/li\u003e\n\u003cli\u003e深入浅出 iOS 系统框架，提供不一样的框架认知\u003c/li\u003e\n\u003cli\u003e加深对不同形式下内存管理在代码中应用的了解\u003c/li\u003e\n\u003cli\u003eOC 语言进阶，深入 Block 的基本语法结构\u003c/li\u003e\n\u003cli\u003e学习 iOS 编程中多线程实现方式，形成自己的方法论\u003c/li\u003e\n\u003cli\u003e稳步学习 Swift 入门及落地实践\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e讲师介绍\u003c/h2\u003e\n\u003cp\u003e\u003cimg src=\"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6468aaa1f0874618991e8d66cf0d1d3d~tplv-k3u1fbpfcp-5.jpeg?\" alt=\"讲师iOS.png\"\u003e\u003c/p\u003e\n\u003ch2\u003e学习路径\u003c/h2\u003e\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\u003ctable\u003e\u003cthead\u003e\u003ctr\u003e\u003cth align=\"center\"\u003e学习模块\u003c/th\u003e\u003cth align=\"center\"\u003e合辑推荐\u003c/th\u003e\u003cth align=\"left\"\u003e主要内容\u003c/th\u003e\u003cth align=\"center\"\u003e状态\u003c/th\u003e\u003c/tr\u003e\u003c/thead\u003e\u003ctbody\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块一\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/course/bytetech/7158271919152693256?from_page=course_list_page\"\u003eiOS 开发者生态概览\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003eiOS 行业状况、开发标准、高效协作\u003c/td\u003e\u003ctd align=\"center\"\u003e已上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块二\u003c/td\u003e\u003ctd align=\"center\"\u003e\u003ca href=\"https://juejin.cn/course/bytetech/7158705477671452680?from_page=course_list_page\"\u003eiOS 语言基础\u003c/a\u003e\u003c/td\u003e\u003ctd align=\"left\"\u003eXcode、Objective-C、GCD、Swift、内存管理\u003c/td\u003e\u003ctd align=\"center\"\u003e已上线\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd align=\"center\"\u003e模块三\u003c/td\u003e\u003ctd align=\"center\"\u003eiOS 入门\u003c/td\u003e\u003ctd align=\"left\"\u003eUIKit、动画编程、多媒体技术\u003c/td\u003e\u003ctd align=\"center\"\u003e待上线\u003c/td\u003e\u003c/tr\u003e\u003c/tbody\u003e\u003c/table\u003e\n\u003ch2\u003e适宜人群\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eiOS 初级开发者或想涉足 iOS 开发领域人群\u003c/li\u003e\n\u003cli\u003e具备基本的代码操作能力\u003c/li\u003e\n\u003cli\u003e对 iOS 基础语法以及类与类之间通信原理有基本了解\u003c/li\u003e\n\u003cli\u003e掌握 OC 基本语法，知道框架的使用规则\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e学习说明\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e「iOS 语言基础」合辑为会员专享，开通会员即可解锁全部章节；\u003c/li\u003e\n\u003cli\u003e本合辑为视频学习形式，\u003cstrong\u003e共计 18 节课程\u003c/strong\u003e，目前已全部更新完成；\u003c/li\u003e\n\u003cli\u003e课程讲解过程中有诸多实战，单节课程简介中均已提供相关工具下载地址，观看前请仔细阅读，提前配置环境；\u003c/li\u003e\n\u003cli\u003e字节内部课课程版权归字节跳动所有，任何机构、媒体、网站或个人未经本网协议授权不得转载、链接、转贴或以其他方式复制发布/发表，违者将依法追究责任；\u003c/li\u003e\n\u003cli\u003e在课程学习过程中，如有任何问题，请邮件联系 \u003ca href=\"mailto:bytetech@bytedance.com\"\u003ebytetech@bytedance.com\u003c/a\u003e。\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://wj.toutiao.com/q/196923/4RZ5XA84/b175/#/\"\u003e你的建议对我们至关重要，此处记录你对字节内部课的体验。\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2\u003e字节内部课\u003c/h2\u003e\n\u003cp\u003e作为一家技术驱动的互联网公司，2012 年创立至今，字节跳动业务快速发展，背后离不开久历经技术实战考验的技术团队。过去数年，\u003cstrong\u003e字节跳动内部技术社区 ByteTech\u003c/strong\u003e 基于公司经典实战案例，沉淀了一系列技术研发培训课程，建立了一套经过验证的技术人才培养体系。\u003c/p\u003e\n\u003cp\u003e“字节内部课”是 \u003cstrong\u003eByteTech 联合掘金课程团队\u003c/strong\u003e，基于字节跳动内部培训体系，倾心精选、打磨字节跳动内部优质技术研发培训课程后推出的系列技术实战课程。希望帮助更多技术同学近距离了解、学习来自字节跳动一线工程师的项目实战经验、系统技术知识。\u003c/p\u003e"
            },
            "parent_id": "0",
            "parent_type": 0
          },
          "categories": [
            {
              "category_id": "6809635626661445640",
              "name": "iOS",
              "parent_id": "0",
              "create_time": 1662535951,
              "update_time": 1665369476,
              "op_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "rank": 0,
              "category_url": ""
            }
          ],
          "tags": [
            {
              "tag_id": "6809640399544516616",
              "name": "iOS",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809640410084802573",
              "name": "Objective-C",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            },
            {
              "tag_id": "6809640463633481741",
              "name": "Swift",
              "create_time": 1662535951,
              "update_time": 1662535951,
              "op_user_id": "0",
              "create_user_id": "0",
              "abstract": "",
              "cover_image": {
                "key": "",
                "url": "",
                "size": 0,
                "mime_type": "",
                "rid": ""
              },
              "status": 2
            }
          ]
        },
      ]
    }
    return res
  },
}

// 用户
export const user = {
  // 获取用户信息
  async getUserInfo({ id }) {
    return {
      "user_id": "3491704662919207",
      "user_name": "刘悦的技术博客",
      "company": "v3u.cn",
      "job_title": "python讲师",
      "avatar_large": "/mock/toux.jpg",
      "level": 5,
      "power": 13381,
      "phone": "",
      "email": "",
      "allow_notification": true,
      "rank_index": 0,
      "wallet_total_bill": 0,
      "description": "python,ruby,前端",
      "blog_address": "v3u.cn",
      "is_black": false,
      "editor_type": "md",
      "register_time": 1573535872,
      "update_time": 1637247045,
      "administrator": 0,
      "builder": 0,
      "favorable_author": 1,
      "book_author": 0,
      "phone_verified": 1,
      "wechat_verified": 1,
      "weibo_verified": 0,
      "github_verified": 1,
      "followee_count": 84,
      "follower_count": 445,
      "post_article_count": 231,
      "digg_article_count": 539,
      "view_article_count": 2972,
      "subscribe_tag_count": 89,
      "got_digg_count": 2476,
      "got_view_count": 420443,
      "comment_count": 27,
      "collect_set_count": 1,
      "booklet_count": 0,
      "buy_booklet_count": 1,
      "post_shortmsg_count": 3,
      "comment_shortmsg_count": 5,
      "digg_shortmsg_count": 1,
      "ltime": 0,
      "isfollowed": false,
      "forbidden_words": 0,
      "create_collect_set_count": 1,
      "follow_collect_set_count": 0,
      "weibo_nickname": "",
      "wechat_nickname": "",
      "github_nickname": "zcxey2911",
      "apply_logout": 0,
      "is_logout": 0,
      "weibo_id": "",
      "is_new": false,
      "study_point": 0,
      "university": {
        "university_id": "0",
        "name": "",
        "logo": ""
      },
      "major": {
        "major_id": "0",
        "parent_id": "0",
        "name": ""
      },
      "student_status": 0,
      "select_event_count": 0,
      "select_online_course_count": 0,
      "identity": 0,
      "graduated_at": -62135596800,
      "blog_move_priority": false,
      "tech_team": {
        "org_id": "0",
        "org_name": "",
        "org_icon": "",
        "role": 0
      },
      "job_count": 0,
      "is_select_annual": true,
      "select_annual_rank": 0,
      "annual_list_type": 0,
      "digg_news_count": 0,
      "news_privilege": 0,
      "digg_toutiao_count": 0,
      "follow_column_cnt": 1,
      "can_tag_cnt": 3,
      "need_lead": 0,
      "follow_topic_count": 6,
      "badges": {
        "wear_badges": null,
        "obtain_badges": null,
        "obtain_count": 0,
        "show_badge": false,
        "link_url": ""
      },
      "is_collect_fast": false,
      "user_growth_info": {
        "user_id": 3491704662919207,
        "jpower": 13381,
        "jscore": 1491.8,
        "jpower_level": 5,
        "jscore_level": 5,
        "jscore_title": "先锋掘友",
        "author_achievement_list": [
          1
        ],
        "vip_level": 0,
        "vip_title": "",
        "jscore_next_level_score": 2000,
        "jscore_this_level_mini_score": 500,
        "vip_score": 0
      },
      "is_vip": false,
      "collection_set_article_count": 0,
      "user_dislike_status": 0
    }
  }
}
