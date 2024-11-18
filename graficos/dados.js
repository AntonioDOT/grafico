import { getCSS, tickConfig } from "./common.js"


async function horasPorAluno() {
    // Dados dos alunos
    const nomeDosAlunos = ['Antônio', 'Jhonatan']
    const horas = [52,70]

    const data = [
        {
            x: nomeDosAlunos, 
            y: horas, 
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Tempo de Tela por Aluno',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                family: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Alunos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Horas',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

async function vizualizarTextoDados() {
    const res = await fetch(url)
    const dados = await res.json()
}

horasPorAluno()