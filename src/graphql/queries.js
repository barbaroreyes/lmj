/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getJolla = /* GraphQL */ `
  query GetJolla($id: ID!) {
    getJolla(id: $id) {
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
export const listJollas = /* GraphQL */ `
  query ListJollas(
    $filter: ModelJollaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJollas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        author
        featured
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
