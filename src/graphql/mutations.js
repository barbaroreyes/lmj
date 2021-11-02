/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createJolla = /* GraphQL */ `
  mutation CreateJolla(
    $input: CreateJollaInput!
    $condition: ModelJollaConditionInput
  ) {
    createJolla(input: $input, condition: $condition) {
      id
      name
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          jolla_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateJolla = /* GraphQL */ `
  mutation UpdateJolla(
    $input: UpdateJollaInput!
    $condition: ModelJollaConditionInput
  ) {
    updateJolla(input: $input, condition: $condition) {
      id
      name
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          jolla_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteJolla = /* GraphQL */ `
  mutation DeleteJolla(
    $input: DeleteJollaInput!
    $condition: ModelJollaConditionInput
  ) {
    deleteJolla(input: $input, condition: $condition) {
      id
      name
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          jolla_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createJollaOrder = /* GraphQL */ `
  mutation CreateJollaOrder(
    $input: CreateJollaOrderInput!
    $condition: ModelJollaOrderConditionInput
  ) {
    createJollaOrder(input: $input, condition: $condition) {
      id
      jolla_id
      order_id
      order {
        id
        user
        date
        total
        jollas {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      jolla {
        id
        name
        description
        image
        author
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const updateJollaOrder = /* GraphQL */ `
  mutation UpdateJollaOrder(
    $input: UpdateJollaOrderInput!
    $condition: ModelJollaOrderConditionInput
  ) {
    updateJollaOrder(input: $input, condition: $condition) {
      id
      jolla_id
      order_id
      order {
        id
        user
        date
        total
        jollas {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      jolla {
        id
        name
        description
        image
        author
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const deleteJollaOrder = /* GraphQL */ `
  mutation DeleteJollaOrder(
    $input: DeleteJollaOrderInput!
    $condition: ModelJollaOrderConditionInput
  ) {
    deleteJollaOrder(input: $input, condition: $condition) {
      id
      jolla_id
      order_id
      order {
        id
        user
        date
        total
        jollas {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      createdAt
      updatedAt
      jolla {
        id
        name
        description
        image
        author
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      customer
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      jollas {
        items {
          id
          jolla_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      jollas {
        items {
          id
          jolla_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      jollas {
        items {
          id
          jolla_id
          order_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
