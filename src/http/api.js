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
        auther: {
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
        auther: {
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
        auther: {
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
        auther: {
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
        auther: {
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
          auther: {
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
          comment_two: [
            {
              id: 'asd2wqveq46',
              auther: {
                id: 'asdwqeq',
                name: 'asdwqeq',
                avatar: '/mock/toux.jpg',
                intro: '我是架构师'
              },
              content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
              created_at: '2020-01-01 00:00:00',
              star_n: 10,
              star_status: false,
              comment_to_content: 'asd2wqveq',
            },
            {
              id: 'asd2wqveq46asdasdffa',
              auther: {
                id: 'asdwqeq',
                name: 'asdwqeq',
                avatar: '/mock/toux.jpg',
                intro: '我是架构师'
              },
              content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
              created_at: '2020-01-01 00:00:00',
              star_n: 0,
              star_status: false,
              comment_to_content: 'asd2wqveq46',
            },
            {
              id: 'asd2wqveq4sdf6',
              auther: {
                id: 'asdwqeq',
                name: 'asdwqeq',
                avatar: '/mock/toux.jpg',
                intro: '我是架构师'
              },
              content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
              created_at: '2020-01-01 00:00:00',
              star_n: 0,
              star_status: false,
              comment_to_content: 'asd2wqveq',
            },
          ]
        },
        {
          id: 'asd2wqveq',
          auther: {
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
          comment_two: [
            {
              id: 'asd2wqveq46',
              auther: {
                id: 'asdwqeq',
                name: 'asdwqeq',
                avatar: '/mock/toux.jpg',
                intro: '我是架构师'
              },
              content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
              created_at: '2020-01-01 00:00:00',
              star_n: 10,
              star_status: false,
              comment_to_content: 'asd2wqveq',
            },
            {
              id: 'asd2wqveq46asdasdffa',
              auther: {
                id: 'asdwqeq',
                name: 'asdwqeq',
                avatar: '/mock/toux.jpg',
                intro: '我是架构师'
              },
              content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
              created_at: '2020-01-01 00:00:00',
              star_n: 0,
              star_status: false,
              comment_to_content: 'asd2wqveq46',
            },
            {
              id: 'asd2wqveq4sdf6',
              auther: {
                id: 'asdwqeq',
                name: 'asdwqeq',
                avatar: '/mock/toux.jpg',
                intro: '我是架构师'
              },
              content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
              created_at: '2020-01-01 00:00:00',
              star_n: 0,
              star_status: false,
              comment_to_content: 'asd2wqveq',
            },
          ]
        },
        {
          id: 'asd2wqveq',
          auther: {
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
          comment_two: [
            {
              id: 'asd2wqveq46',
              auther: {
                id: 'asdwqeq',
                name: 'asdwqeq',
                avatar: '/mock/toux.jpg',
                intro: '我是架构师'
              },
              content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
              created_at: '2020-01-01 00:00:00',
              star_n: 10,
              star_status: false,
              comment_to_content: '',
            },
            {
              id: 'asd2wqveq46asdasdffa',
              auther: {
                id: 'asdwqeq',
                name: 'asdwqeq',
                avatar: '/mock/toux.jpg',
                intro: '我是架构师'
              },
              content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
              created_at: '2020-01-01 00:00:00',
              star_n: 0,
              star_status: false,
              comment_to_content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
            },
            {
              id: 'asd2wqveq4sdf6',
              auther: {
                id: 'asdwqeq',
                name: 'asdwqeq',
                avatar: '/mock/toux.jpg',
                intro: '我是架构师'
              },
              content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
              created_at: '2020-01-01 00:00:00',
              star_n: 0,
              star_status: false,
              comment_to_content: '',
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
          auther: {
            id: 'asdwqeq',
            name: 'asdwqeq',
            avatar: '/mock/toux.jpg',
            intro: '我是架构师'
          },
          content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
          created_at: '2020-01-01 00:00:00',
          star_n: 0,
          star_status: false,
          comment_to_content: '',
        },
        {
          id: 'asd2wqveq46asdasdffasdfsdfesrwer',
          auther: {
            id: 'asdwqeq',
            name: 'asdwqeq',
            avatar: '/mock/toux.jpg',
            intro: '我是架构师'
          },
          content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
          created_at: '2020-01-01 00:00:00',
          star_n: 0,
          star_status: false,
          comment_to_content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
        },
        {
          id: 'asd2wqveq46asdasdffaesrwes23rr',
          auther: {
            id: 'asdwqeq',
            name: 'asdwqeq',
            avatar: '/mock/toux.jpg',
            intro: '我是架构师'
          },
          content: 'asdwqeq急急急急急急急急急急姐姐斤斤计较',
          created_at: '2020-01-01 00:00:00',
          star_n: 0,
          star_status: false,
          comment_to_content: '',
        },
        {
          id: 'asd2wqveq46asdasdfqwe123faesrwer',
          auther: {
            id: 'asdwqeq',
            name: 'asdwqeq',
            avatar: '/mock/toux.jpg',
            intro: '我是架构师'
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
        auther: {
          id: 'asdwqeq',
          name: 'asdwqeq',
          avatar: '/mock/toux.jpg',
          intro: '我是架构师'
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
