import s from 'components/TransactionHistory/TransactionHistory.module.css';
import PropTypes from 'prop-types';
import TransactionItem from 'components/TransactionHistory/TransactionItem';

function TransactionHistory({ data }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.tableHead}>Type</th>
          <th className={s.tableHead}>Amount</th>
          <th className={s.tableHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <TransactionItem
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
