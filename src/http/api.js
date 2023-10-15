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
    return [
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
