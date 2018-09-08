import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
// import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import configs from '../configs'

class Currency extends React.Component {

  _handleCurrencyChange = name => event => {
    let currencyCode = event.target.value
    this.props.onCurrencyChange({
      currencyCode: currencyCode,
      currencyName: configs.currency[currencyCode]
    })
  }

  _handleAmountChange = event => {
    let amount = event.target.value
    this.props.onAmountChange(amount)
  }

  render() {
    let { currencyCode, exchangeType, exchangeAmount, balance } = this.props
    return (
      <List component="nav">
        <FormControl>
          <NativeSelect
            value={currencyCode}
            onChange={this._handleCurrencyChange(exchangeType)}
            input={<Input name={exchangeType} id={exchangeType} />}
          >
            { Object.keys(configs.currency).map((c) => <option key={configs.currency[c]} value={c}>{configs.currency[c]}</option>)}
            
          </NativeSelect>
          <FormHelperText>Balance: {balance}</FormHelperText>
          <Input value={exchangeAmount} onChange={this._handleAmountChange} type="number"/>
        </FormControl>
      </List>
    )
  }
}

Currency.propTypes = {
  onCurrencyChange: PropTypes.func,
  currencyCode: PropTypes.number,
  // currencyName: PropTypes.oneOf(['GBP', 'EUR', 'USD']),
  currencyType: PropTypes.oneOf(['From', 'To']),
  exchangeAmount: PropTypes.number,
  balance:PropTypes.number
}

export default Currency