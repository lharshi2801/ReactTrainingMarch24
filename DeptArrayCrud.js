
import { useState } from "react";


function DeptArrayCrud() {
    const [deptsArray, setDeptsArray] = useState([]);

    // For reading data from user through textboxes
    const [deptno, setDeptno] = useState("");
    const [dname, setDname] = useState("");
    const [loc, setLoc] = useState("");

    function getDeptsButton_click() {

        let tempArray = [
            { deptno: 10, dname: "Accounts", loc: "Hyd" },
            { deptno: 20, dname: "Sales", loc: "Pune" },
            { deptno: 30, dname: "Marketing", loc: "Hyd" },
            { deptno: 40, dname: "Operations", loc: "Chnnai" },
        ];

        setDeptsArray(tempArray);

    }


    function addDeptButton_click() {
        let deptObj = {};
        deptObj.deptno = deptno;
        deptObj.dname = dname;
        deptObj.loc = loc;


        let tempArray = [...deptsArray];
        tempArray.push(deptObj);
        setDeptsArray(tempArray);

        clearFields();
    }

    function clearFields()
    {
        setDeptno("");
        setDname("");
        setLoc("");
    }


    function deleteDept_click(dno) {
        
        const isConfirmed = window.confirm("Are you sure you want to delete this department?");
    
        
        if (isConfirmed) {
            let tempArray = [...deptsArray];
            let index = tempArray.findIndex(item => item.deptno === dno);
            tempArray.splice(index, 1);
    
            setDeptsArray(tempArray);
        }
    }

    function  selectDept_click(dno)
    {
        let deptObj = deptsArray.find(item => item.deptno == dno);

        setDeptno(deptObj.deptno);
        setDname(deptObj.dname);
        setLoc(deptObj.loc);
    }

    function updateDeptButton_click() {
        let tempArray = [...deptsArray];
        
        let index = tempArray.findIndex(item => item.deptno == deptno);
        tempArray[index].dname = dname ;
        tempArray[index].loc = loc ;

        setDeptsArray(tempArray);
        clearFields();
    }

    let resultArray = deptsArray.map((item, index) => {
        return <tr key={index}>
                        <td>   {item.deptno}  </td>
                        <td>   {item.dname}  </td>
                        <td>   {item.loc}  </td>
                        <td>
                    
                    <img 
                        src="./Images/selectimage.jpg"
                        alt="Select" 
                        onClick={() => selectDept_click(item.deptno)} 
                        style={{  width: '24px', height: '24px' }}  
                    />
                    
                    
                    <img 
                        src="./Images/Delete.jpg"
                        alt="Delete" 
                        onClick={() => deleteDept_click(item.deptno)} 
                        style={{  width: '24px', height: '24px' }} 
                    />
                </td>
                </tr>
    });


    return (<>

        <h3>Working with State -- CRUD Operations on Array of Objects</h3>
        <hr />

        <input type="text" placeholder="Dept Number" value={deptno}   onChange={(e) => setDeptno(e.target.value)} />
        <input type="text" placeholder="Dept Name" value={dname}   onChange={(e) => setDname(e.target.value)} />
        <input type="text" placeholder="Dept Location" value={loc}  onChange={(e) => setLoc(e.target.value)} />
        <hr />

        <input type="button" onClick={getDeptsButton_click} value="Get Depts" />
        <input type="button" onClick={addDeptButton_click} value="Add Dept" />
        <input type="button" onClick={updateDeptButton_click} value="Update Dept" />
        <hr />

        <table border="2" width="500" cellspacing="0" cellpadding="5">
            <tr>
                <th>Dept Number</th>
                <th>Dept Name</th>
                <th>Location</th>
                <th></th>
            </tr>
            {resultArray}
        </table>

    </>);
}

export default DeptArrayCrud;