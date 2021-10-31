import PropTypes from 'prop-types';
import TransactionItem from 'components/TransactionHistory/TransactionItem';

function TransactionHistory({ data }) {
  return (
    <table className='transaction-history'>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => {
          return (
            <tr id={item.id}>
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
