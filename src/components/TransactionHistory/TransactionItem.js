import s from 'components/TransactionHistory/TransactionHistory.module.css';
import PropTypes from 'prop-types';

function TransactionItem({ type, amount, currency }) {
  return (
    <>
      <td className={s.tableData}>{type}</td>
      <td className={s.tableData}>{amount}</td>
      <td className={s.tableData}>{currency}</td>
    </>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionItem;
