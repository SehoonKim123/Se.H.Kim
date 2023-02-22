window.addEventListener('load', (e) => {
    makeSubject()
    makeBarChart1()
    makeBarChart2()
    makeBarChart3()
});

function makeSubject(){
    var subject = [
        '반도체 공정 (A+)',
        '반도체 공정실습 (A+)',
        '박막 공학 (A+)',
        '박막 실습 (A+)',
        '반도체 물리학 (A+)',
        '반도체 소자공학 (A+)',
        '반도체 실험 (A+)',
        'LED 공학 (A+)',
        '반도체 열역학 (A+)',
        '반도체응용기기설계 (A+)',
        '나노 전자공학 (A)',
        '디스플레이원론 (A+)',
        '전자소자재료공학 (A+)',
        '나노반도체공학개론 (A+)',
        '나노 재료공학 (A+)',
        '전자기학 (A+)',
        '디스플레이원론 (A+)',
        '전자소자재료공학 (A+)',
        '플라즈마공학 (A+)',
        '태양광공학 (B+)'
    ];
    var wrap = document.getElementsByClassName('subject_wrap')[0];

    subject.forEach(e => {
        wrap.innerHTML += `<div>${e}</div>`;
    });
}


function makeBarChart1(){
    var data = [
        {name: 'Python',
        percentage: 100},
        {name: '2D AutoCad',
        percentage: 50},
        {name: 'Solidworks',
        percentage: 50},
        {name: 'Matlab',
        percentage: 30},
        {name: 'Html5 / Css3',
        percentage: 30}
    ];
    var color = ['#ff547a', '#ffcb51', '#20cdb1', '#4ca8f0', '#4c5cf0'];
    var wrap = document.getElementsByClassName('bar-chart-wrap')[0]

    data.forEach((e, i)=>{
        var chart= ` <div class="chart-box">
                        <p>${e.name}</p>
                        <div class="bar-bg">
                            <div class="bar" style="width:${e.percentage}%; background-color: ${color[i]}"></div>
                        </div>
                        <span>${e.percentage}%</span>
                    </div>`
        wrap.innerHTML += chart;
        
    })
}
function makeBarChart2(){
    var data = [
        {name: 'Crawling',
        percentage: 100},
        {name: 'Data Processing',
        percentage: 80},
        {name: 'Data Analysis',
        percentage: 50},
        {name: 'Data Visualization',
        percentage: 50},
        {name: 'RPA',
        percentage: 50},

    ];
    var color = ['#ff547a', '#ffcb51', '#20cdb1', '#4ca8f0', '#4c5cf0'];
    var wrap = document.getElementsByClassName('bar-chart-wrap')[1]

    data.forEach((e, i)=>{
        var chart= ` <div class="chart-box">
                        <p>${e.name}</p>
                        <div class="bar-bg">
                            <div class="bar" style="width:${e.percentage}%; background-color: ${color[i]}"></div>
                        </div>
                        <span>${e.percentage}%</span>
                    </div>`
        wrap.innerHTML += chart;
        
    })
}
function makeBarChart3(){
    var data = [
        {name: '한글',
        percentage: 100},
        {name: 'Excel',
        percentage: 60},
        {name: 'Power Point',
        percentage: 60}
    ];
    var color = ['#ff547a', '#ffcb51', '#4ca8f0'];
    var wrap = document.getElementsByClassName('bar-chart-wrap')[2]

    data.forEach((e, i)=>{
        var chart= ` <div class="chart-box">
                        <p>${e.name}</p>
                        <div class="bar-bg">
                            <div class="bar" style="width:${e.percentage}%; background-color: ${color[i]}"></div>
                        </div>
                        <span>${e.percentage}%</span>
                    </div>`
        wrap.innerHTML += chart;
        
    })
}
