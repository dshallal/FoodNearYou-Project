import FFBodyPage from '../components/FFBodyPage';
import HeaderRest from '../components/HeaderRest';
import './App.css';

function FFPage(){
    return(
        <div className='container'>
        <HeaderRest class1 = "buttons2" class2 = "buttons" class3 = "buttons"/>
        <FFBodyPage />
        </div>
    );
}

export default FFPage;