// src/utils/response.js — Standard API response helpers

export const sendSuccess = (res, data = null, message = 'Success', statusCode = 200) => {
  const response = { success: true, message }
  if (data !== null) response.data = data
  return res.status(statusCode).json(response)
}

export const sendError = (res, message = 'Something went wrong', statusCode = 500, errors = null) => {
  const response = { success: false, message }
  if (errors) response.errors = errors
  return res.status(statusCode).json(response)
}

export const sendPaginated = (res, data, pagination, message = 'Success') => {
  return res.status(200).json({
    success: true,
    message,
    data,
    pagination,
  })
}
