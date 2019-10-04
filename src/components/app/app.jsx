import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { GetDatas } from './app-actions.js'
import { Bar } from 'react-chartjs-2'
import { Slider, Select } from 'antd'
const { Option } = Select

const chartData = {
  labels: ['Poupança', 'CDB / LC', 'LCI / LCA'],
  datasets: [
    {
      data: [407594, 181045, 253060],
      backgroundColor: [
        'rgba(140, 150, 160)',
        'rgba(70, 125, 255)',
        'rgba(90, 200, 255)'
      ]
    }
  ]
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const App = (props) => {

  useEffect(() => {
    props.GetDatas()
    console.log(props.GetDatas())
  }, [])

  return (
    <section className='container-box'>
      <h1>Fixed Income Simulator</h1>
      <section className='container-box__simulator'>
        <section className='container-box__simulatorLeft'>
          <h2>1. Investimento Simulado</h2>

          <div>
            <div className='input_one box'>
              <div className='textValue'>
                <h3>Valor Investido</h3>
                <p>R$ 100.000,00</p>
              </div>
              <Slider tipFormatter={null} />
            </div>

            <div className='input_two box'>
              <div className='textValue'>
                <h3>Período</h3>
                <p>24 meses</p>
              </div>
              <Slider tipFormatter={null} />
            </div>

            <div className='input_three box'>
              <h3>Taxa ao Ano do CDB/LC</h3>
              <div className='textValue'>
                <div>
                  <Select defaultValue="%cdi" onChange={handleChange}>
                    <Option value="%cdi">% do CDI</Option>
                    <Option value="cdi%">CDI + %</Option>
                    <Option value="ipca">IPCA + %</Option>
                    <Option value="prefixado">Prefixado</Option>
                  </Select>
                </div>
                <p>100%</p>
              </div>
              <Slider tipFormatter={null} />
            </div>

            <div className='input_four box'>
              <h3>Taxa ao Ano do LCI/LCA</h3>
              <div className='textValue'>
                <div>
                  <Select defaultValue="ipca" onChange={handleChange}>
                    <Option value="%cdi">% do CDI</Option>
                    <Option value="cdi%">CDI + %</Option>
                    <Option value="ipca">IPCA + %</Option>
                    <Option value="prefixado">Prefixado</Option>
                  </Select>
                </div>
                <p>98%</p>
              </div>
              <Slider tipFormatter={null} />
            </div>

            <div className='input_five box'>
              <div className='textValue'>
                <h3>Taxa DI</h3>
                <p>6,4 a.a</p>
              </div>
              <Slider tipFormatter={null} />
            </div>

            <div className='input_six box'>
              <div className='textValue'>
                <h3>Taxa IPCA</h3>
                <p>6,4 a.a</p>
              </div>
              <Slider tipFormatter={null} />
            </div>
          </div>
        </section>

        <section className='container-box__simulatorRight'>
          <h2>2. Valor Esperado</h2>

          <Bar
            data={chartData}
            options={{
              maintainAspectRatio: false
            }}
          />
        </section>
      </section>
    </section>
  )
}

const mapStateToProps = state => ({
  datas: state.app.datas
})

const mapDispatchToProps = dispatch => bindActionCreators ({
  GetDatas
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
