import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';

function StatisticsList({ data }) {
  return (
    <section className='statistics'>
      <h2 className='title'>Upload stats</h2>

      <ul className='stat-list'>
        {data.map((item) => {
          return (
            <li className='item' id={item.id}>
              <StatisticsItem label={item.label} percentage={item.percentage} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticsList;
