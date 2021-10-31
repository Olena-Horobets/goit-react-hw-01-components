import PropTypes from 'prop-types';

function TransactionItem({ type, amount, currency }) {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionItem;
