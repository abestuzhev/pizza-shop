import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm, Controller  } from "react-hook-form";
import { Link } from "react-router-dom";
import Radio from './Radio';
import {Route, useHistory} from "react-router-dom";
import Modal from "./../Modal";

import deliveryZone from "./../../assets/data/deliveryZone.geojson"
import Address from './Address';

const Checkout = () => {

  const history = useHistory();

  // useEffect(()=> {
  //   console.log('start query...');
  //   try{
  //       fetch(deliveryZone, {
  //           dataType: 'json',
  //       }).then( result => result.json())
  //       .then(data => console.log(data));
  //   }catch(e){
  //       console.log(e);
  //   }

  // }, [])


  const user = {
    name: "Алексей",
    phone: "+7 950-660-26-64",
    address: "пр. Ленинградский, 38, кв. 1",
    timeDelivery: "Как можно скорее"
  }

  // ---------------------------------------------------

  const [bonusType, setBonusType] = useState("promocode")

  // ---------------------------------------------------
  const typeDelivery = [
    {type:"delivery", name: "Доставка"},
    {type:"pickup", name: "Самовывоз"}
  ]

  const [deliveryType, setDeliveryType] = useState(typeDelivery[0].type)
  console.log("deliveryType", deliveryType);
  const deliveryTypeHandler = (typeObj) => {
    setDeliveryType(typeObj.type)
  }
  // ---------------------------------------------------
  const { register, handleSubmit, control } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <div className="wrapper">
        <div className="content">
          <div className="container">
          <div className="checkout-title">Заказ {deliveryType === "delivery" ? "на доставку" : "на самовывоз" }</div>

            <div className="checkout">
              <div className="checkout-form">
                <form className="c-form" action="" onSubmit = {handleSubmit(onSubmit)}>
                  <div className="c-form-box">
                    
                    <div className="c-form-groupe">
                      <div className="c-form-title">Данные гостя</div>
                      <div className="c-form-grid">
                        <div className="c-form-grid__col">
                          <div className="c-input-base">
                            {/* <span class="c-input-base__mask">+7 000 000-00-00</span> */}
                            <label htmlFor="">Имя</label>

                            <input
                              type="text"
                              {...register("name")}
                              defaultValue={user.name}
                              placeholder="Алексей"
                            />
                          </div>
                        </div>
                        <div className="c-form-grid__col">
                          <div className="c-input-base">
                            {/* <span class="c-input-base__mask">+7 000 000-00-00</span> */}
                            <label htmlFor="">Номер телефона</label>

                            <input
                              type="text"
                              {...register("phone")}
                              defaultValue={user.phone}
                              placeholder="+7 950-660-26-64"
                            />
                            <Link to="/checkout/phone" className="c-input-base__link">Изменить</Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="c-form-groupe">
                      <div className="c-form-item">
                        <div className="c-form-title">Способ доставки</div>
                        <div className="c-form-tab">
                          {
                            typeDelivery.map((obj, index) => {
                              return (
                                <div 
                                key={obj.type}
                                className={deliveryType === obj.type ? "c-form-tab__link active" : "c-form-tab__link"}
                                onClick={() => deliveryTypeHandler(obj)}
                                >{obj.name}</div>
                              )
                            })
                          }
                        </div>
                        {
                          deliveryType === "delivery"
                          ? <div className="c-form-tab__body">
                              <div className="c-input-base">
                                <label htmlFor="">Адрес доставки</label>

                                <input
                                  type="text"
                                  defaultValue={user.address}
                                  placeholder="Введите адрес доставки"
                                />
                                <Link to="/checkout/address" className="c-input-base__link">Изменить</Link>
                              </div>
                            </div>
                          : <div className="c-form-tab__body">
                            <div className="c-form-adition">
                            <Controller
                                control={control}
                                name="deliveryPoint"
                                render={({
                                  field: { onChange, onBlur, value, name, ref},
                                  fieldState: { invalid, isTouched, isDirty, error },
                                  formState,
                                }) => (
                                  <Radio
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    name={name}
                                    inputRef={ref}
                                    orientation="horizontal"
                                    defaultValue="KOMS"
                                    value={[
                                      {name: 'Комсомольская, 6', value:"KOMS", id:"123", workTime: "с 09:00 до 00:00"}, 
                                      {name: 'ТРЦ Макси', value:"LEN38", id:"456", workTime: "с 10:00 до 23:00"}, 
                                      {name: 'Дзержинского, 7', id:"789", value:"DZ7", workTime: "с 10:00 до 23:00"}]}
                                  />
                                )}
                              />

                            </div>
                              
                          </div>
                        }
                      </div>
                    </div>
                    <div className="c-form-groupe">
                      <div className="c-form-item">
                        <div className="c-form-grid">
                          <div className="c-form-grid__col">
                            <div className="c-input-base">
                              {/* <span class="c-input-base__mask">+7 000 000-00-00</span> */}
                              <label htmlFor="">Время доставки</label>

                              <input
                                type="text"
                                defaultValue={user.timeDelivery}
                                placeholder="Как можно скорее"
                              />
                              <Link to="/checkout/time" className="c-input-base__link">Изменить</Link>
                            </div>
                          </div>
                          <div className="c-form-grid__col">

                            <div className="c-form-checkbox">
                              <div className="c-form-checkbox__item">
                                <div className="c-checkbox">

                                  <input 
                                    name="noCall" 
                                    type="checkbox" 
                                    {...register('noCall')} 
                                    id="noCall" 
                                    />
                                  <label htmlFor="noCall">Не перезванивать</label>
                                  
                                </div>
                              </div>
                              <div className="c-form-checkbox__item">
                                <div className="c-checkbox">

                                  <input 
                                    name="contactlessDelivery" 
                                    type="checkbox" 
                                    {...register('contactlessDelivery')} 
                                    id="contactlessDelivery" 
                                    />
                                  <label htmlFor="contactlessDelivery">Бесконтактная доставка</label>
                                  
                                </div>
                              </div>                              
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="c-form-groupe c-form-groupe-adition">
                      <div className="c-form-title">Бонусы и скидки</div>
                      <div className="c-form-item">
                        {
                          bonusType === "promocode"
                          ? <div className="c-input-base c-input-base--bonus">
                          <label htmlFor="">Промокод</label>
                          <div className="c-input-box">
                            <input
                              type="text"
                              className="c-input-round"
                            />
                            <button className="">Применить</button>
                          </div>
                          
                          <div className="c-input-base__link" onClick={(() => setBonusType("bonus"))}>Использовать бонусы</div>
                        </div>
                        : <div className="c-input-base c-input-base--bonus">
                        <label htmlFor="">Списание бонусов</label>
                        <div className="c-input-box">
                        <div className="c-form-checkbox">
                              <div className="c-form-checkbox__item">
                                <div className="c-checkbox">

                                  <input 
                                    name="bonus" 
                                    type="checkbox" 
                                    {...register('bonus')} 
                                    id="bonus" 
                                    />
                                  <label htmlFor="bonus">Списать 15 бонусов</label>
                                  
                                </div>
                              </div>                              
                            </div>
                        </div>
                        
                        <div className="c-input-base__link" onClick={(() => setBonusType("promocode"))}>Использовать промокод</div>
                      </div>
                        }
                        
                      </div>
                    </div>

                  </div>

                  <div className="c-form-groupe c-form-adition">
                    <div className="c-form-title">Выберите способ оплаты</div>
                    <div className="c-form-item">
                      <div className="c-form-grid">
                        <div className="c-form-grid__col">
                          <Controller
                            control={control}
                            name="pay"
                            render={({
                              field: { onChange, onBlur, value, name, ref},
                              fieldState: { invalid, isTouched, isDirty, error },
                              formState,
                            }) => (
                              <Radio
                                onBlur={onBlur}
                                name={name}
                                onChange={onChange}
                                orientation="vertical"
                                inputRef={ref}
                                defaultValue="gpay"
                                value={[{name: 'Google Pay', value:"gpay"}, {name: 'Картой на сайте', value:"CARD"}, {name: 'Наличными', value:"CASH"}]}
                              />
                            )}
                          />


                          
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="c-form-footer">
                    <Link to="/cart">Назад в корзину</Link>
                    <button className="c-btn" type="submit">Оформить заказ на 3750 ₽</button>
                  </div>
                </form>
              </div>
              <div className="checkout-order">
                <div className="c-form-title">Состав заказа</div>
                <div className="checkout-order-list">
                  <div className="checkout-order-list__item">
                    <div className="checkout-order-card">
                      <div className="checkout-order-card__body">
                        <div className="checkout-order-card__title">Пицца "Цезарь"</div>
                        <div className="checkout-order-card__subtitle">Средняя 28 см</div>
                      </div>
                      <div className="checkout-order-card-price">
                        <div className="checkout-order-card-price__num">450</div>
                      </div>
                    </div>
                  </div>
                  <div className="checkout-order-list__item">
                    <div className="checkout-order-card">
                      <div className="checkout-order-card__body">
                        <div className="checkout-order-card__title">Пицца "Сырная курочка"</div>
                        <div className="checkout-order-card__subtitle">Большая 35 см</div>
                      </div>
                      <div className="checkout-order-card-price">
                        <div className="checkout-order-card-price__num">660</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="checkout-order__footer">
                  <div className="checkout-order-sale">
                    <div className="checkout-order-sale__text">Скидка</div>
                    <div className="checkout-order-sale__sum">200</div>
                  </div>
                  <div className="checkout-order-total">
                    <div className="checkout-order-total__text">Сумма заказа</div>
                    <div className="checkout-order-total__body">                      
                    <div className="checkout-order-total__old">1450</div>
                      <div className="checkout-order-total__sum">1150</div>
                    </div>
                    
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    
      <Route
          path="/checkout/address"
          children={({match}) => {
              return (
                  Boolean(match) &&
                  <Modal history={history} size="small" closeBtn={true}>
                      <Address />
                  </Modal>
              )
          }}
        />
        <Route
          path="/checkout/phone"
          children={({match}) => {
              return (
                  Boolean(match) &&
                  <Modal history={history} size="small" closeBtn={true}>
                      Подтвердите свой номер телефона
                  </Modal>
              )
          }}
        />
        <Route
          path="/checkout/time"
          children={({match}) => {
              return (
                  Boolean(match) &&
                  <Modal history={history} size="small" closeBtn={true}>
                      Укажите время доставки
                  </Modal>
              )
          }}
        />
    </>
  )
}

export default Checkout;
