import 'react';
import {default as Navbar} from './navbar';
import {default as tpl} from '../../tpl/main_content.jsx';

export default class MainContent extends React.Component {
   render() {
       return (
           <div>
               <Navbar />
               tpl
           </div>
       )
   }
}
