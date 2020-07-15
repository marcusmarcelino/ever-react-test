export const Types = {
  GET_ACCESS: 'GET_ACCESS',
  ENABLE_ACCESS: 'ENABLE_ACCESS',
  HIDE_LINK: 'HIDE_LINK',
  SHOW_LINK: 'SHOW_LINK',
  RETRACTABLE_MENU: 'RETRACTABLE_MENU',
  RETRACTABLE_MOBILE_MENU: 'RETRACTABLE_MOBILE_MENU',
  RETRACTABLE_MOBILE_MENU_FALSE: 'RETRACTABLE_MOBILE_MENU_FALSE',
};

export const Actions = {
  getAccess: () => ({
    type: Types.GET_ACCESS,
    payload: {},
  }),
  hideLink: (text) => ({
    type: Types.HIDE_LINK,
    text,
    payload: {},
  }),
  showLink: (text) => ({
    type: Types.SHOW_LINK,
    text,
    payload: {},
  }),
  retractableMenu: () => ({
    type: Types.RETRACTABLE_MENU,
    payload: {},
  }),
  retractableMobileMenu: () => ({
    type: Types.RETRACTABLE_MOBILE_MENU,
    payload: {},
  }),
  retractableMobileMenuFalse: () => ({
    type: Types.RETRACTABLE_MOBILE_MENU_FALSE,
    payload: {},
  }),
};

export const Selectors = {};

const INITIAL_STATE = {
  retractable: false,
  retractableMobile: true,
  links: [
    {
      text: 'Home',
      icon: 'home',
      haveChildren: false,
      show: true,
      count: 0,
      disabled: false,
      isPermission: true,
      selected: true,
      route: '/home',
    },
    {
      text: 'Meu e-commerce',
      icon: 'monitorPurchases',
      haveChildren: false,
      show: true,
      count: 0,
      disabled: false,
      isPermission: false,
      selected: false,
      route: '/myEcommerce',
    },
    {
      text: 'Landing page',
      icon: 'monitorPage',
      haveChildren: false,
      show: true,
      count: 0,
      disabled: false,
      isPermission: false,
      selected: false,
      route: null,
    },
    {
      text: 'Carrinho dinâmico',
      icon: 'shoppingCart',
      haveChildren: false,
      show: true,
      count: 0,
      disabled: false,
      isPermission: false,
      selected: false,
      route: '/cart',
    },
    {
      text: 'Cupom de desconto',
      icon: 'coupon',
      haveChildren: false,
      show: true,
      count: 0,
      disabled: false,
      isPermission: false,
      selected: false,
      route: '/cupom',
    },
    {
      text: 'Links de apoio',
      icon: 'monitorLinks',
      show: true,
      count: 0,
      disabled: false,
      isPermission: false,
      selected: false,
      route: null,
    },
    {
      text: 'Adquirir produtos',
      icon: 'shoppingBag',
      haveChildren: false,
      count: 0,
      show: true,
      disabled: false,
      isPermission: false,
      selected: false,
      route: '/products',
    },
    {
      text: 'Meus clientes',
      icon: 'rate',
      haveChildren: false,
      count: 0,
      show: true,
      disabled: false,
      isPermission: false,
      selected: false,
      route: null,
    },
    {
      text: 'Parceiros',
      icon: 'partners',
      haveChildren: false,
      count: 0,
      show: true,
      disabled: false,
      isPermission: false,
      selected: false,
      route: null,
    },
    {
      text: 'Empreendedores',
      icon: 'groupUser',
      haveChildren: false,
      count: 0,
      show: true,
      disabled: false,
      isPermission: false,
      selected: false,
      route: '/entrepreneurs',
    },
    {
      text: 'Saque',
      icon: 'payment',
      haveChildren: false,
      count: 0,
      show: true,
      disabled: false,
      isPermission: false,
      selected: false,
      route: null,
    },
    {
      text: 'Relatórios',
      icon: 'growth',
      haveChildren: true,
      count: 0,
      show: true,
      disabled: false,
      isPermission: false,
      selected: false,
      route: null,
    },

    {
      text: 'Vendas',
      icon: '',
      haveChildren: false,
      father: 'Relatórios',
      show: false,
      count: 15,
      disabled: true,
      isPermission: false,
      selected: false,
      route: null,
    },
    {
      text: 'Compras',
      icon: '',
      haveChildren: false,
      father: 'Relatórios',
      show: false,
      count: 2,
      disabled: true,
      isPermission: false,
      selected: false,
      route: null,
    },
    {
      text: 'Parceiros',
      icon: '',
      haveChildren: false,
      father: 'Relatórios',
      show: false,
      count: 0,
      disabled: true,
      isPermission: false,
      selected: false,
      route: null,
    },
    {
      text: 'Empreendedores',
      icon: '',
      haveChildren: false,
      father: 'Relatórios',
      show: false,
      count: 22,
      disabled: true,
      isPermission: false,
      selected: false,
      route: '/entrepreneurs',
    },
    {
      text: 'Saques',
      icon: '',
      father: 'Relatórios',
      show: false,
      haveChildren: false,
      count: 0,
      disabled: true,
      isPermission: false,
      selected: false,
      route: null,
    },

    {
      text: 'Espaço EVER',
      icon: 'spaceShip',
      haveChildren: true,
      count: 0,
      show: true,
      disabled: false,
      isPermission: false,
      selected: false,
      route: null,
    },

    {
      text: 'Bank',
      icon: '',
      haveChildren: false,
      father: 'Espaço EVER',
      show: false,
      count: 1,
      disabled: true,
      isPermission: false,
      selected: false,
      route: null,
    },
    {
      text: 'Shopping',
      icon: '',
      haveChildren: false,
      father: 'Espaço EVER',
      show: false,
      count: 1,
      disabled: true,
      isPermission: false,
      selected: false,
      route: null,
    },
    {
      text: 'Marketing',
      icon: '',
      haveChildren: false,
      father: 'Espaço EVER',
      show: false,
      count: 5,
      disabled: true,
      isPermission: false,
      selected: false,
      route: null,
    },
    {
      text: 'University',
      icon: '',
      haveChildren: false,
      father: 'Espaço EVER',
      show: false,
      count: 2,
      disabled: true,
      isPermission: false,
      selected: false,
      route: null,
    },

    {
      text: 'Calendário',
      icon: 'calendar',
      haveChildren: false,
      count: 0,
      show: true,
      disabled: false,
      isPermission: false,
      selected: false,
      route: null,
    },
    {
      text: 'Meu gerente EVER',
      haveChildren: false,
      icon: 'support',
      count: 0,
      show: true,
      disabled: false,
      isPermission: false,
      selected: false,
      route: null,
    },
    {
      text: 'Suporte',
      icon: 'question',
      haveChildren: false,
      count: 0,
      show: true,
      disabled: false,
      isPermission: false,
      selected: false,
      route: null,
    },
  ],
};

export default function links(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.HIDE_LINK:
      return {
        ...state,
        links: state.links.map((e) => {
          if (e.father === action.text) {
            e.show = false;
          }
          return e;
        }),
      };
    case Types.SHOW_LINK:
      return {
        ...state,
        links: state.links.map((e) => {
          if (e.father === action.text) {
            e.show = true;
          }
          return e;
        }),
      };
    case Types.RETRACTABLE_MENU:
      return {
        ...state,
        retractable: !state.retractable,
      };
    case Types.RETRACTABLE_MOBILE_MENU:
      return {
        ...state,
        retractableMobile: !state.retractableMobile,
      };
    case Types.RETRACTABLE_MOBILE_MENU_FALSE:
      return {
        ...state,
        retractableMobile: true,
      };
    case Types.GET_ACCESS:
      return state;
    case Types.ENABLE_ACCESS:
      state.links.forEach((e) => {
        if (action.payload.access.includes(e.text)) {
          e.isPermission = true;
        }
      });
      return state;
    default:
      return state;
  }
}
