import React from 'react';
import { useForm, Controller  } from "react-hook-form";
import { Link } from "react-router-dom";
import Radio from './Radio';

const Checkout = () => {


  const user = {
    name: "Алексей",
    phone: "+7 950-660-26-64",
    address: "пр. Ленинградский, 38, кв. 1",
    timeDelivery: "Как можно скорее"
  }
  const { register, handleSubmit, control } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <div className="wrapper">
        <div className="content">
          <div className="container">
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
                            <div className="c-input-base__link">Изменить</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="c-form-groupe">
                      <div className="c-form-item">
                        <div className="c-form-title">Способ доставки</div>
                        <div className="c-input-base">
                          {/* <span class="c-input-base__mask">+7 000 000-00-00</span> */}
                          <label htmlFor="">Адрес доставки</label>

                          <input
                            type="text"
                            defaultValue={user.address}
                            placeholder="пр. Ленинградский, 38, кв. 1"
                          />
                          <div className="c-input-base__link">Изменить</div>
                        </div>
                      </div>
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
                              <div className="c-input-base__link">Изменить</div>
                            </div>
                          </div>
                          <div className="c-form-grid__col">
                            
                          </div>
                        </div>
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
                              field: { onChange, onBlur, value, name, ref },
                              fieldState: { invalid, isTouched, isDirty, error },
                              formState,
                            }) => (
                              <Radio
                                onBlur={onBlur}
                                onChange={onChange}
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
                    <button className="c-btn" type="submit">Оформить заказ</button>
                  </div>
                </form>
              </div>
              <div className="checkout-order">
                <div className="checkout-order__list">

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout;
