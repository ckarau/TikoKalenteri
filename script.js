const weeks = [
    { week: 1, date: '2025-05-19', content: 'Nauti uudesta vuodesta kesällä!' },
    { week: 2, date: '2025-05-26', content: 'Käy kauppakeskukseissa!' },
    { week: 3, date: '2025-06-02', content: 'Löydä uusia leirintäpaikkoja!' },
    { week: 4, date: '2025-06-09', content: 'Osallistu kesämetsästykseen!' },
    { week: 5, date: '2025-06-16', content: 'Tutustu Helsingin museoihin!' },
    { week: 6, date: '2025-06-23', content: 'Käy Kaivopuolella!' },
    { week: 7, date: '2025-06-30', content: 'Järjestä piknik Suomenlinnalla!' },
    { week: 8, date: '2025-07-07', content: 'Osallistu kesämarjastukseen!' },
    { week: 9, date: '2025-07-14', content: 'Käy Helsingin satamalla!' },
    { week: 10, date: '2025-07-21', content: 'Löydä uusia reittiä jalankulkimiseen!' },
    { week: 11, date: '2025-07-28', content: 'Tutustu Helsingin teattereihin!' },
    { week: 12, date: '2025-08-04', content: 'Käy Nuuksion puistoissa!' },
    { week: 13, date: '2025-08-11', content: 'Päättöviikko kesällä!' }
];

const calendar = document.getElementById('calendar');
const today = new Date();

weeks.forEach(({ week, date, content }) => {
    const hatch = document.createElement('div');
    hatch.classList.add('hatch');
    hatch.textContent = week;

    const hatchDate = new Date(date);

    if (hatchDate <= today) {
        hatch.addEventListener('click', () => {
            if (!hatch.classList.contains('open')) {
                hatch.classList.add('open');
                hatch.innerHTML = `<p>${content}</p>`;
            }
        });
    } else {
        hatch.classList.add('locked');
        hatch.innerHTML = `<p>${week}</p>`;
    }

    calendar.appendChild(hatch);
});