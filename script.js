const weeks = [
    { week: 1, date: '2025-05-19', content: 'Nauti tästä kesäsätä Tokoinrannassa!' },
    { week: 2, date: '2025-05-26', content: 'Käy Itiksessä!' },
    { week: 3, date: '2025-06-02', content: 'Matkaa Kaunissaareen!' },
    { week: 4, date: '2025-06-09', content: 'Käy ongella Vanhankaupunginlahdella!' },
    { week: 5, date: '2025-06-16', content: 'Tutustu Helsingin museoihin!' },
    { week: 6, date: '2025-06-23', content: 'Käy Sitratorilla!' },
    { week: 7, date: '2025-06-30', content: 'Järjestä piknik Suomenlinnassa!' },
    { week: 8, date: '2025-07-07', content: 'Osta Alepasta purjo!' },
    { week: 9, date: '2025-07-14', content: 'Käy Helsingin satamalla!' },
    { week: 10, date: '2025-07-21', content: 'Löydä uusia reittiä jalankulkimiseen!' },
    { week: 11, date: '2025-07-28', content: 'Tutustu Helsingin teattereihin!' },
    { week: 12, date: '2025-08-04', content: 'Käy Nuuksion puistoissa!' },
    { week: 13, date: '2025-08-11', content: 'Päättöviikko kesällä!' }
];

const calendar = document.getElementById('calendar');

weeks.forEach(({ week, date, content }) => {
    const hatch = document.createElement('div');
    hatch.classList.add('hatch');
    
    // Muotoillaan päivämäärä suomalaisessa muodossa
    const formattedDate = new Date(date).toLocaleDateString('fi-FI', {
        day: 'numeric',
        month: 'numeric'
    });
    
    hatch.innerHTML = `
        <div class="hatch-content">
            <div class="week-number">${week}</div>
            <div class="date">${formattedDate}</div>
        </div>
    `;

    hatch.addEventListener('click', () => {
        if (!hatch.classList.contains('open')) {
            hatch.classList.add('open');
            hatch.innerHTML = `
                <div class="hatch-content">
                    <div class="week-number">${week}</div>
                    <div class="date">${formattedDate}</div>
                    <div class="content">${content}</div>
                </div>
            `;
        }
    });

    calendar.appendChild(hatch);
});
