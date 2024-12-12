import { type Dispatch } from 'react';
import {
  Checkbox, type CheckboxOptionType, Flex, Radio, type RadioChangeEvent, Typography,
} from 'antd';
import './TicketFilter.css';

interface TicketFilterProps {
  setCurrency: Dispatch<React.SetStateAction<string>>
  setTransfer: Dispatch<React.SetStateAction<string[]>>
}

function TicketFilter({ setCurrency, setTransfer }: TicketFilterProps) {
  const currencyOptions = [
    { label: 'RUB', value: 'RUB' },
    { label: 'USD', value: 'USD' },
    { label: 'EUR', value: 'EUR' },
  ];

  const tranferOptions: Array<CheckboxOptionType<string | null>> = [
    { label: 'Вce', value: 'all' },
    { label: 'Без пересадок', value: '0' },
    { label: '1 пересадка', value: '1' },
    { label: '2 пересадки', value: '2' },
    { label: '3 пересадки', value: '3' },
  ];

  function onCurrencyChange(e: RadioChangeEvent) {
    setCurrency(e.target.value);
  }
  function onTransferChange(checkedValues: Array<string | null>) {
    setTransfer(checkedValues as string[]);
  }

  return (
    <Flex className="filter-card" gap="large" vertical>
      <Flex gap="small" vertical>
        <Typography.Text className="filter-item-title" strong>ВАЛЮТА</Typography.Text>
        <Radio.Group
          block
          buttonStyle="solid"
          defaultValue="RUB"
          onChange={onCurrencyChange}
          options={currencyOptions}
          optionType="button"
        />
      </Flex>
      <Flex gap="small" vertical>
        <Typography.Text className="filter-item-title" strong>КОЛИЧЕСТВО ПЕРЕСАДОК</Typography.Text>
        <Checkbox.Group
          className="checkbox-group"
          defaultValue={['all']}
          onChange={onTransferChange}
          options={tranferOptions}
          style={{ flexDirection: 'column' }}
        />
      </Flex>
    </Flex>
  );
}

export default TicketFilter;
