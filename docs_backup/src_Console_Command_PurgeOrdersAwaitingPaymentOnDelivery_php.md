# PurgeOrdersAwaitingPaymentOnDelivery.php

**Path**: `src\Console\Command\PurgeOrdersAwaitingPaymentOnDelivery.php`

## Summary
This console command purges (processes) orders that are awaiting Cash on Delivery (C.O.D.) payment by automatically transitioning them to "paid" status after a specified number of days. It queries pending C.O.D. orders older than the configured threshold and uses a state machine to update their payment status, with support for dry-run mode to preview changes without committing them.

## Classes
- `PurgeOrdersAwaitingPaymentOnDelivery`

## Function Details

### `configure`


### `execute`

- **Parameters**: `InputInterface $input, OutputInterface $output`
- **Description**: @throws \Exception
/

### `findOrdersWithCODSinceDays`

- **Parameters**: `int $days`
- **Description**: @var OrderInterface $order */
foreach ($ordersWithCOD as $order) {
$payment = $order-&gt;getLastPayment(PaymentInterface::STATE_NEW);
if (null !== $payment) {
if ($this-&gt;stateMachine-&gt;can($payment, PaymentTransitions::GRAPH, PaymentTransitions::TRANSITION_COMPLETE)) {
$this-&gt;stateMachine-&gt;apply($payment, PaymentTransitions::GRAPH, PaymentTransitions::TRANSITION_COMPLETE);
$io-&gt;success('La commande #' . $order-&gt;getId() . ' a été passer au statut "payé".');
continue;
}
}

$io-&gt;error('La commande #' . $order-&gt;getId() . ' n\'a pas pu être passer au statut "payé".');
}

return Command::SUCCESS;
}

/**
@throws \Exception
/

