import {VuxComponentListData as routerList} from 'vux'
import Vue from 'vue'
console.log(routerList);
function camelCase (input) {
  let str = input.toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase()
  })

  str = str.replace(/_(.)/g, function (match, group1) {
    return group1.toUpperCase()
  })
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

for(var x in routerList) {
  var path = camelCase(routerList[x].name);
  Vue.set(routerList[x], 'path', path); 
}
console.log(routerList);

const registerRoute = (config) => {
  let route = [];
  config.map(page =>
    route.push({
      name: page.name,
      path: '/'+page.path,
      component: resolve => require([`./components/${page.path}`],resolve),
      meta: {
        title: camelCase(page.name)
      }
    })
  );
  return route;
};

const route = registerRoute(routerList);

let componentList = [
  {
    path: '/Demo',
    title: 'DemoList',
    component: 'Demo'
  },
  {
    path: '/Pullup',
    title: 'Pullup',
    component: 'Pullup'
  },
  {
    path: '/PulldownPullup',
    title: 'PulldownPullup',
    component: 'PulldownPullup'
  },
  {
    path: '/Pulldown',
    title: 'Pulldown',
    component: 'Pulldown'
  },
  {
    path: '/SearchStatic',
    title: 'SearchStatic',
    component: 'SearchStatic'
  },
  {
    path: '/TabbarSimple',
    title: 'TabbarSimple',
    component: 'TabbarSimple'
  },
  {
    path: '/TabbarIcon',
    title: 'TabbarIcon',
    component: 'TabbarIcon'
  }
  
];
componentList.map(page =>
  route.push({
    name: page.title,
    path: page.path,
    component: resolve => require([`./components${page.path}`],resolve),
    meta: {
      title: page.title || page.name
    }
  })

)
route.push({
  path: '/',
  component: resolve => require(['./components/Home'],resolve),
  meta: {
    title: 'Vux'
  }
});

// console.log(route)
export default route;
