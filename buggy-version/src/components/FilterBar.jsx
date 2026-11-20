/**
 * FilterBar — dropdown to choose which tasks are shown.
 *
 * Props:
 *   filter (string)    — current filter: 'all' | 'active' | 'done'
 *   onChange(value)    — called with the new filter
 */

const options = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'done', label: 'Completed' },
];

export default function FilterBar({ filter, onChange }) {
  return (
    <div className="filter-bar">
      <label htmlFor="filter">Show:</label>
      <select id="filter" value={filter} onChange={onChange}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
