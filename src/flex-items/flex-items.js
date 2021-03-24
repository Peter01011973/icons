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
                  <h3 className="icon-facebook"> Hello</h3>
                  <div className="block__item">1</div>
               </div>
               <div className="block__column">
               {/* 2-й способ использования иконок:
               для каждой иконки создаю react-компонент, который отображает svg. 
               Вызывю компонент и передаю в него в качестве props стили (className) */}
                  <h3><Helloween className="block__icon"/>Hello</h3>
                  <div className="block__item">2</div>
               </div>
               <div className="block__column">
               {/* 3-й способ использования иконок:
               следую рекомендациям fontawsome для react */}
                  <FontAwesomeIcon icon={faCoffee} className="block__icon"/>
                  <div className="block__item">3</div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FlexItems;