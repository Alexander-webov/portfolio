import React from "react";

function ModalWindow() {
  return (
    <div className="hidden">
      <div id="modal" className="header-modal">
        <div className="feedback-title">ОБСУДИТЬ ПРОЕКТ</div>
        <div className="feedback-form">
          <form name="contact" method="post" action="mail.php" id="data">
            <input
              type="hidden"
              name="project_name"
              value="zhukova-webdesign"
            />
            <input type="hidden" name="admin_email" value="test90@gmail.com" />
            <input type="hidden" name="form_subject" value="Новая заявка!" />

            <div className="feedback-form__top-box">
              <input
                className="feedback-form-name"
                name="name"
                type="text"
                placeholder="Ваше имя"
                required
              />
              <input
                className="feedback-form-phone"
                name="phone"
                type="text"
                placeholder="Телефон"
              />
              <select className="feedback-form-select" id="select" form="data">
                <option value="empty">Выберите способ связи</option>
                <option value="Звонок">Звонок</option>
                <option value="Whatsapp">Whatsapp</option>
                <option value="Viber">Viber</option>
                <option value="Telegram">Telegram</option>
              </select>
            </div>
            <input
              className="termsCheck"
              checked={true}
              type="checkbox"
              name="check"
              id="check"
            />
            <label className="label-check" htmlFor="check">
              Отправляя данные Вы даете согласие на передачу и обработку
              персональных данных
            </label>
            <input
              className="feedback-form-btn modal-btn btn"
              id="f_send"
              type="submit"
              placeholder="Отправить"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
