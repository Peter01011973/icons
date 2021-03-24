import "./flex-items.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Helloween from "../asset/iconfont/jack-o-lantern";

const FlexItems = () => {
   return (
      <div className="wrappper">
         <div className="block">
            <div className="block__row">
               <div className="block__column">
               {/* 1-й способ использования иконок:
               в public/index.html с помощью link подключаю кастомный 
               iconfont (style.css). В className добавляю класс иконки */}
                  <div className="block__item">
                     <span className="icon-facebook block__icon"></span> 1
                  </div>
               </div>
               <div className="block__column">
               {/* 2-й способ использования иконок:
               для каждой иконки создаю react-компонент, который отображает svg. 
               Вызывю компонент и передаю в него в качестве props стили (className) */}
                  <div className="block__item"><Helloween className="block__icon"/> 2</div>
               </div>
               <div className="block__column">
               {/* 3-й способ использования иконок:
               следую рекомендациям fontawsome для react */}
                  <div className="block__item"><FontAwesomeIcon icon={faCoffee} className="block__icon"/> 3</div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FlexItems;