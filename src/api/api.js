import {
  postRequest,
  getRequest
} from "./../utils/http"

// import {
//   wxRequest
// } from '@/utils/wxRequest';

const guessLikeAPI = {
  list(params) {
    return getRequest("/guess-like/items", params)
  }
}

const goodsAPI = {
  list(params) {
    return getRequest("/goods/items", params)
  },
  detail(params) {
    return getRequest("/goods-detail/item-detail", params)
  },
  info(params) {
    return getRequest("/goods/info", params)
  }
}

const brandAPI = {
  list(params) {
    return getRequest("/brand/list", params)
  }
}

const categoryAPI = {
  list(params) {
    return getRequest("/category/list", params)
  }
}

const shopCartAPI = {
  add(params) {
    return getRequest("/shopcart/add", params)
  },
  updateNum(params) {
    return getRequest("/shopcart/update-num", params)
  },
  list(params) {
    return getRequest("/shopcart/list", params)
  },
  delete(params) {
    return getRequest("/shopcart/delete", params)
  },
  check(params) {
    return getRequest("/shopcart/check", params)
  },
  allCheck(params) {
    return getRequest("/shopcart/all-check", params)
  }
}

const userAPI = {
  wxLogin(params) {
    return getRequest("/user/wxLogin", params)
  }
}

const receiveAddressAPI = {
  save(params) {
    return postRequest("/receive-address/save", params)
  },
  // update(params) {
  //   return postRequest("/receive-address/update", params)
  // },
  del(params) {
    return getRequest("/receive-address/del", params)
  },
  list(params) {
    return getRequest("/receive-address/list", params)
  },
  getById(params) {
    return getRequest("/receive-address/getById", params)
  },
  setDefault(params) {
    return getRequest("/receive-address/setDefault", params)
  }
}

const orderAPI = {
  genOrderToken(params) {
    return getRequest("/order/genOrderToken", params)
  },
  orderConfirmInfo(params) {
    return getRequest("/order/orderConfirmInfo", params)
  },
  order(params) {
    return postRequest("/order/order", params)
  }
}

module.exports = {
  guessLike: guessLikeAPI,
  goods: goodsAPI,
  brand: brandAPI,
  shopCart: shopCartAPI,
  user: userAPI,
  receiveAddress: receiveAddressAPI,
  order: orderAPI,
  category: categoryAPI
}