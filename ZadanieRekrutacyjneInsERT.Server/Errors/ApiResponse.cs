﻿namespace ZadanieRekrutacyjneInsERT.Server.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message = "")
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageForStatusCode(statusCode);

        }
        public int StatusCode { get; set; }
        public string Message { get; set; }

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "Bad Request",
                401 => "Unauthorized",
                404 => "Not Found",
                500 => "Contact with an administrator or try again later",
                _ => string.Empty
            };
        }
    }
}
