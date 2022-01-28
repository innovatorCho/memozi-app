import { useState } from "react/cjs/react.development";
import './Table.css';

const Table = () => {
    const [rowCount, setRowCount] = useState(0);
    const [cellCount, setCellCount] = useState(0);
    const ROW_CODE = 'X';
    const CELL_CODE = 'Y';

    const rowsIds = [];
    const cellIds = [];

    const handleRowCount = (e) => {
        setRowCount(e.target.value);
    }

    const handleCellCount = (e) => {
        setCellCount(e.target.value);
    }

    const generateTable = () => {
        const table = document.getElementById('table');
        clearTable(table);
        
        for(let i = 1 ; i <= rowCount ; i++) {
            const rows = table.insertRow();    
            rows.id = ROW_CODE + i;
            rowsIds.push(rows.id);
            for(let j = 0 ; j < cellCount ; j++ ) {
                const cells = rows.insertCell(j);
                cells.id = rows.id + '__' + CELL_CODE + j;
                cellIds.push(cells.id);
            }
        }

        console.log(`row id : ${rowsIds}, cell id : ${cellIds}`);
    }

    const clearTable = (table) => {
        while(table.rows.length > 0) {
            table.deleteRow(0);
        }
    }

    return(
        <div>
            <div id='quizTable'>
                <table id='table' className="tableSe"></table>
            </div>
            <input type='number' className="rowCnt" placeholder="행" onChange={handleRowCount} required></input>
            <input type='number' className="cellCnt" placeholder="열" onChange={handleCellCount} required></input>
            <button onClick={generateTable}>행추가</button>
        </div>
    );
}

export default Table;