import "./SelectChair.css";
import chair from "../assets/chair-top.png";
import table from "../assets/table-top.png";
function SelectChair() {

    return (
        <div className="main-container">
            <div className="chair-text">
                <h2>Hoş Geldin Kardeşim!</h2>
                <p>Biz de oyun başlamak için seni bekliyorduk. Ama öncelikle hangi sandalyede oturmak istediğini seçebilir misin?</p>
            </div>
            <div className="sitting-container">
                <div className="chair-container">
                    <img src={chair} alt="" style={{rotate: "-90deg"}} className="chair-image"/>
                </div>
                <div className="table-container">
                    <div className="chair-container">
                        <img src={chair} alt="" className="chair-image"/>
                    </div>
                    <div className="table-container">
                        <img src={table} alt="" className="table-image"/>
                    </div>
                    <div className="chair-container">
                        <img src={chair} alt="" style={{rotate: "180deg"}} className="chair-image"/>
                    </div>
                </div>
                <div className="chair-container">
                    <img src={chair} alt="" style={{rotate: "90deg"}} className="chair-image"/>
                </div>
            </div>
        </div>
    )
}

export default SelectChair
