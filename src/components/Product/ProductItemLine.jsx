import React from "react";
import style from "./Product.module.scss";
import star from "../../assets/svg/star.svg";
import buy from "../../assets/svg/buy.svg";
import favorite from "../../assets/svg/favorite.svg";
import favoriteRed from "../../assets/svg/favorite-red.svg";
import picture from "../../assets/images/nullPicture.png";
import { Api } from "../../api/api";
import { useNavigate } from "react-router-dom";

const ProductItemLine = (props) => {
  const navigate = useNavigate();

  const handleAddFavorite = () => {
    const token = localStorage.token;
    Api.put(
      "api/favorite/" + props.id,
      {},
      { headers: { apiKey: token } }
    ).then((res) => {
      props.onAdd?.(props.id);
    });
  };

  const handleRemoveFavorite = () => {
    const token = localStorage.token;
    Api.delete("api/favorite/" + props.id, { headers: { apiKey: token } }).then(
      (res) => {
        props.onRemove?.(props.id);
      }
    );
  };

  const handleClickFavorite = (e) => {
    e.stopPropagation();
    if (props.isFavorite) {
      handleRemoveFavorite();
      return;
    }
    handleAddFavorite();
  };

  const handleAddInBasket = (e) => {
    e.stopPropagation();
    const token = localStorage.token;
    Api.put(
      "api/basket/" + props.id,
      { count: 1 },
      { headers: { apiKey: token } }
    );
  };

  const redirectToProduct = (e) => {
    navigate("/product/" + props.id);
  };
  return (
    <div onClick={redirectToProduct} className={style.lineFlex}>
      <div className={style.lineContain}>
        <img
          alt="product"
          src={
            props.img === null ? picture : "https://agregatekb.ru/" + props.img
          }
          className={style.lineImg}
        />
        {props.special ? (
          <div className={style.special}>Спецпредложение</div>
        ) : (
          <></>
        )}
      </div>
      <div className={style.info}>
        <div className={style.lineTitle}>{props.title}</div>
        <div className={style.grabe}>
          <img alt="star" src={star} className={style.lineStar} />
          <div>
            {props.grabe} ({props.totalGrabe} оценок)
          </div>
        </div>
        <div className={style.description}>{props.description}</div>
        <div className={style.lineSell}>
          <div className={style.lineValue}>{props.price} ₽</div>
          <div className={style.sortFlex}>
            <img
              onClick={handleClickFavorite}
              alt="favorite"
              className={style.lineFavorite}
              src={props.isFavorite ? favoriteRed : favorite}
            />
            <div className={style.lineBuy}>
              <div onClick={handleAddInBasket} className={style.lineBuyText}>
                В корзину
              </div>
              <img alt="buyIcon" src={buy} className={style.lineBuyIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemLine;
