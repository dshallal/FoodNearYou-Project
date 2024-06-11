import GCBodyPage from '../components/GCBodyPage';
import HeaderRest from '../components/HeaderRest';
import './App.css';

function GCPage(){
    return(
        <div className='container'>
            <HeaderRest class1 = "buttons" class2 = "buttons" class3 = "buttons2"/>
            <GCBodyPage />
        </div>
    );
}

export default GCPage;