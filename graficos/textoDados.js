 const paragrafo = document.createElement('p')
  paragrafo.classList.add('graficos-container__texto')
  paragrafo.innerHTML = `Foi constatado que, em frente as telas de smartphones, os Alunos      Antônio, Jhonatan, passam, respectivamente, 52 e 70 horas semanais `

  const container = document.getElementById('graficos-container')
  container.appendChild(paragrafo)


vizualizarTextoDados()
