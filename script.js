document.addEventListener('DOMContentLoaded', function () {
    loadAttendanceRecords();
});

function submitAttendance() {
    const studentIDInput = document.getElementById('studentID');
    const studentNameInput = document.getElementById('studentName');
    const subjectCodeInput = document.getElementById('subjectCode');
    const statusInput = document.getElementById('status');

    // Check if inputs are not null before accessing their values
    if (studentIDInput && studentNameInput && subjectCodeInput && statusInput) {
        const studentID = studentIDInput.value;
        const studentName = studentNameInput.value;
        const subjectCode = subjectCodeInput.value;
        const status = statusInput.value;

        if (studentID && studentName && subjectCode && status) {
            const record = {
                studentID,
                studentName,
                subjectCode,
                status,
                date: new Date().toLocaleString()
            };

            let records = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
            records.push(record);
            localStorage.setItem('attendanceRecords', JSON.stringify(records));

            // Clear the form fields
            studentIDInput.value = '';
            studentNameInput.value = '';
            subjectCodeInput.value = '';
            statusInput.value = '';

            // Reload attendance records
            loadAttendanceRecords();
        }
    }
}

function deleteAttendance(index) {
    let records = JSON.parse(localStorage.getItem('attendanceRecords')) || [];

    // Check if index is within bounds before attempting to delete
    if (index >= 0 && index < records.length) {
        records.splice(index, 1);
        localStorage.setItem('attendanceRecords', JSON.stringify(records));
        loadAttendanceRecords();
    }
}

function loadAttendanceRecords() {
    const recordsTable = document.getElementById('recordsList');
    
    // Check if recordsTable is not null before accessing its properties
    if (recordsTable) {
        recordsTable.innerHTML = '';

        let records = JSON.parse(localStorage.getItem('attendanceRecords')) || [];

        records.forEach((record, index) => {
            const row = recordsTable.insertRow(-1);

            const cellID = row.insertCell(0);
            cellID.textContent = record.studentID;

            const cellName = row.insertCell(1);
            cellName.textContent = record.studentName;

            const cellCode = row.insertCell(2);
            cellCode.textContent = record.subjectCode;

            const cellStatus = row.insertCell(3);
            cellStatus.textContent = record.status;

            const cellDate = row.insertCell(4);
            cellDate.textContent = record.date;

            const cellAction = row.insertCell(5);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteAttendance(index));
            cellAction.appendChild(deleteButton);
        });
    }
}
document.addEventListener('DOMContentLoaded', function () {
    loadAttendanceRecords();
});

function submitAttendance() {
    const studentIDInput = document.getElementById('studentID');
    const studentNameInput = document.getElementById('studentName');
    const subjectCodeInput = document.getElementById('subjectCode');
    const statusInput = document.getElementById('status');

    // Check if inputs are not null before accessing their values
    if (studentIDInput && studentNameInput && subjectCodeInput && statusInput) {
        const studentID = studentIDInput.value;
        const studentName = studentNameInput.value;
        const subjectCode = subjectCodeInput.value;
        const status = statusInput.value;

        // Validate studentID to allow only numbers
        if (!/^\d+$/.test(studentID)) {
            alert("Please enter a valid Student ID (numbers only).");
            return;
        }

        // Validate studentName to disallow numbers
        if (/\d/.test(studentName)) {
            alert("Please enter a valid Student Name (no numbers).");
            return; 
        }

        if (studentID && studentName && subjectCode && status) {
            const record = {
                studentID,
                studentName,
                subjectCode,
                status,
                date: new Date().toLocaleString()
            };

            let records = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
            records.push(record);
            localStorage.setItem('attendanceRecords', JSON.stringify(records));

            // Clear the form fields
            studentIDInput.value = '';
            studentNameInput.value = '';
            subjectCodeInput.value = '';
            statusInput.value = '';

            // Reload attendance records
            loadAttendanceRecords();
        }
    }
}

document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
