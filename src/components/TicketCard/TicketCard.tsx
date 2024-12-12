import {
  Button, Divider, Flex, Typography,
} from 'antd';
import { type Ticket } from '../../types';
import numberWithSpaces from '../../utils';
import './TicketCard.css';

interface TicketCardProps {
  ticket: Ticket
  currency: string
}

function TicketCard({ ticket, currency }: TicketCardProps) {
  return (
    <Flex className="card">
      <Flex align="center" className="left" gap="small" vertical>
        <img alt={ticket.company_name} className="company-logo" src={ticket.company_logo} />
        <Button className="buy-button" size="large" type="primary">
          <Flex vertical>
            <Typography.Text className="buy-button-text">Купить</Typography.Text>
            <Typography.Text className="buy-button-text">
              {currency === 'RUB' && `за ${numberWithSpaces(ticket.price_rub)} ₽`}
              {currency === 'USD' && `за ${numberWithSpaces(ticket.price_usd)} $`}
              {currency === 'EUR' && `за ${numberWithSpaces(ticket.price_eur)} €`}
            </Typography.Text>
          </Flex>
        </Button>
      </Flex>
      <Divider className="divider" type="vertical" />
      <Flex className="right" vertical>
        <Flex align="center" justify="space-between" wrap>
          <Typography.Text className="time">{ticket.start_time}</Typography.Text>
          <Typography.Text className="transfer">
            {ticket.transfer !== '0' ? `Пересадки: ${ticket.transfer}` : 'Без пересадок'}
          </Typography.Text>
          <Typography.Text className="time">{ticket.end_time}</Typography.Text>
        </Flex>
        <Flex justify="space-between" wrap>
          <Typography.Text className="city">
            {`${ticket.city_from}, ${ticket.airport_from}`}
          </Typography.Text>
          <Typography.Text className="city">
            {`${ticket.city_to}, ${ticket.airport_to}`}
          </Typography.Text>
        </Flex>
        <Flex justify="space-between" wrap>
          <Typography.Text className="date">{ticket.start_date}</Typography.Text>
          <Typography.Text className="date">{ticket.end_date}</Typography.Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TicketCard;
