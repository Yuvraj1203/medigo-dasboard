//* Sections for route, if search from header the suggestion box will show routes with heading of particular section *******//
export const Sections = {
  All: "All",
};

export type RouteSection = (typeof Sections)[keyof typeof Sections];

//* roles for route, if navigate to any route, user will restrict if the role is not allowed to that route *******//
export const Roles = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

export type UserRole = (typeof Roles)[keyof typeof Roles];

//* all the routes type *******//
export type RouteMeta = {
  path: string;
  description?: string;
  tags?: readonly string[];
  section?: RouteSection;
  roles?: readonly UserRole[];
  hidden?: boolean;
  order?: number;
};

//* type for the parent of all routes *******//
export type RouteType = {
  public: {
    login: (redirect?: string) => RouteMeta;
  };
  protected: {
    dashboard: RouteMeta;
  };
};

export const Routes = {
  //* public routes *****************************//
  public: {
    login: (redirect?: string) => ({
      path: redirect
        ? `/login?redirect=${encodeURIComponent(redirect)}`
        : "/login",
      tags: ["login", "auth"],
    }),
  },

  //* protected routes *****************************//
  protected: {
    dashboard: {
      path: "/dashboard",
      tags: ["home", "dashboard"],
    },
    orders: {
      path: "/orders",
      tags: ["orders"],
    },
    prescriptions: {
      path: "/prescriptions",
      tags: ["prescriptions"],
    },
    analytics: {
      path: "/analytics",
      tags: ["analytics"],
    },
    inventory: {
      path: "/inventory",
      tags: ["inventory"],
    },
    products: {
      path: "/products",
      tags: ["products"],
    },
    riders: {
      path: "/riders",
      tags: ["riders"],
    },
    settings: {
      path: "/settings",
      tags: ["settings"],
    },
    users: {
      path: "/users",
      tags: ["users"],
    },
  },
};
