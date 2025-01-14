import { Api } from "./api.js";

export const GetPopularsProducts = async (page, limit) => {
  return await Api.get(
    "api/products?pagination[page]=" +
      page +
      "&pagination[limit]=" +
      limit +
      "&filter[isPopular]=true",
    { RequestData: {} }
  ).then((response) => {
    return response.data;
  });
};
export const GetActualsProducts = async (page, limit) => {
  return await Api.get(
    "api/products?pagination[page]=" +
      page +
      "&pagination[limit]=" +
      limit +
      "&filter[isActual]=true",
    { RequestData: {} }
  ).then((response) => {
    return response.data;
  });
};
export const GetRecommendsProducts = async (page, limit) => {
  return await Api.get(
    "api/products?pagination[page]=" +
      page +
      "&pagination[limit]=" +
      limit +
      "&filter[isRecommend]=true",
    { RequestData: {} }
  ).then((response) => {
    return response.data;
  });
};
export const GetNewsProducts = async (page, limit) => {
  return await Api.get(
    "api/products?pagination[page]=" +
      page +
      "&pagination[limit]=" +
      limit +
      "&filter[isNew]=true",
    { RequestData: {} }
  ).then((response) => {
    return response.data;
  });
};
export const GetAvailablesProducts = async (page, limit) => {
  return await Api.get(
    "api/products?pagination[page]=" +
      page +
      "&pagination[limit]=" +
      limit +
      "&filter[isAvailable]=true",
    { RequestData: {} }
  ).then((response) => {
    return response.data;
  });
};
export const GetFilterProducts = async () => {
  return await Api.get("api/products/filter", { RequestData: {} }).then(
    (response) => {
      return response.data;
    }
  );
};
export const GetFilteredActual = async (
  page,
  limit,
  minPrice,
  maxPrice,
  categoryId
) => {
  if (categoryId.length === 0) {
    return await Api.get(
      "api/products?pagination[page]=" +
        page +
        "&pagination[limit]=" +
        limit +
        "&filter[minPrice]=" +
        minPrice +
        "&filter[maxPrice]=" +
        maxPrice +
        "&filter[isActual]=true",
      { RequestData: {} }
    ).then((response) => {
      return response.data;
    });
  } else {
    return await Api.get(
      "api/products?pagination[page]=" +
        page +
        "&pagination[limit]=" +
        limit +
        "&filter[minPrice]=" +
        minPrice +
        "&filter[maxPrice]=" +
        maxPrice +
        "&filter[isActual]=true&search[categoryId]=" +
        categoryId.join(","),
      { RequestData: {} }
    ).then((response) => {
      return response.data;
    });
  }
};
export const GetFilteredPopular = async (
  page,
  limit,
  minPrice,
  maxPrice,
  categoryId
) => {
  if (categoryId.length === 0) {
    return await Api.get(
      "api/products?pagination[page]=" +
        page +
        "&pagination[limit]=" +
        limit +
        "&filter[minPrice]=" +
        minPrice +
        "&filter[maxPrice]=" +
        maxPrice +
        "&filter[isPopular]=true",
      { RequestData: {} }
    ).then((response) => {
      return response.data;
    });
  } else {
    return await Api.get(
      "api/products?pagination[page]=" +
        page +
        "&pagination[limit]=" +
        limit +
        "&filter[minPrice]=" +
        minPrice +
        "&filter[maxPrice]=" +
        maxPrice +
        "&filter[isPopular]=true&search[categoryId]=" +
        categoryId.join(","),
      { RequestData: {} }
    ).then((response) => {
      return response.data;
    });
  }
};

export const getFilteredProducts = async (
  page,
  limit,
  minPrice,
  maxPrice,
  subCategoryList
) => {
  if (subCategoryList.length === 0) {
    return await Api.get(
      "api/products?pagination[page]=" +
        page +
        "&pagination[limit]=" +
        limit +
        "&filter[minPrice]=" +
        minPrice +
        "&filter[maxPrice]=" +
        maxPrice +
        "&filter[isSubCategory]=true",
      { RequestData: {} }
    ).then((response) => {
      return response.data;
    });
  } else {
    return await Api.get(
      "api/products?pagination[page]=" +
        page +
        "&pagination[limit]=" +
        limit +
        "&filter[minPrice]=" +
        minPrice +
        "&filter[maxPrice]=" +
        maxPrice +
        "&filter[isSubCategory]=true&search[subCategoryId]=" +
        subCategoryList.join(","),
      { RequestData: {} }
    ).then((response) => {
      return response.data;
    });
  }
};

export const GetFilteredRecommend = async (
  page,
  limit,
  minPrice,
  maxPrice,
  categoryId
) => {
  if (categoryId.length === 0) {
    return await Api.get(
      "api/products?pagination[page]=" +
        page +
        "&pagination[limit]=" +
        limit +
        "&filter[minPrice]=" +
        minPrice +
        "&filter[maxPrice]=" +
        maxPrice +
        "&filter[isRecommend]=true",
      { RequestData: {} }
    ).then((response) => {
      return response.data;
    });
  } else {
    return await Api.get(
      "api/products?pagination[page]=" +
        page +
        "&pagination[limit]=" +
        limit +
        "&filter[minPrice]=" +
        minPrice +
        "&filter[maxPrice]=" +
        maxPrice +
        "&filter[isRecommend]=true&search[categoryId]=" +
        categoryId.join(","),
      { RequestData: {} }
    ).then((response) => {
      return response.data;
    });
  }
};
export const GetFilteredNews = async (
  page,
  limit,
  minPrice,
  maxPrice,
  categoryId
) => {
  return await Api.get(
    "api/products/products?pagination[page]=" +
      page +
      "&pagination[limit]=" +
      limit +
      "&filter[minPrice]=",
    minPrice +
      "&filter[maxPrice]=" +
      maxPrice +
      "&filter[isNew]=true&search[categoryId]=" +
      categoryId,
    { RequestData: {} }
  ).then((response) => {
    return response.data;
  });
};
export const GetFilteredAvailables = async (
  page,
  limit,
  minPrice,
  maxPrice,
  categoryId
) => {
  if (categoryId.length === 0) {
    return await Api.get(
      "api/products?pagination[page]=" +
        page +
        "&pagination[limit]=" +
        limit +
        "&filter[minPrice]=" +
        minPrice +
        "&filter[maxPrice]=" +
        maxPrice +
        "&filter[isAvailable]=true",
      { RequestData: {} }
    ).then((response) => {
      return response.data;
    });
  } else {
    return await Api.get(
      "api/products?pagination[page]=" +
        page +
        "&pagination[limit]=" +
        limit +
        "&filter[minPrice]=" +
        minPrice +
        "&filter[maxPrice]=" +
        maxPrice +
        "&filter[isAvailable]=true&search[categoryId]=" +
        categoryId.join(","),
      { RequestData: {} }
    ).then((response) => {
      return response.data;
    });
  }
};
export const GetProductsCategory = async (page, limit, categoryId) => {
  return await Api.get(
    "api/products?pagination[page]=" +
      page +
      "&pagination[limit]=" +
      limit +
      "&search[categoryId]=" +
      categoryId,
    { RequestData: {} }
  ).then((response) => {
    return response.data;
  });
};

export const GetProductDetail = async (id) => {
  return await Api.get("api/products/" + id, { RequestData: {} }).then(
    (response) => {
      return response.data;
    }
  );
};

export const GetSeacrhProducts = async (page, limit, name) => {
  return await Api.get(
    "api/products?pagination[page]=" +
      page +
      "&pagination[limit]=" +
      limit +
      "&search[name]=" +
      name,
    { RequestData: {} }
  ).then((response) => {
    return response.data;
  });
};

export const GetProductsAll = async (page, limit) => {
  return await Api.get(
    "api/products?pagination[page]=" + page + "&pagination[limit]=" + limit,
    { RequestData: {} }
  ).then((response) => {
    return response.data;
  });
};
