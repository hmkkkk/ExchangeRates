using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System.Linq.Expressions;
using System.Net;
using ZadanieRekrutacyjneInsERT.Core.Dtos;
using ZadanieRekrutacyjneInsERT.Core.Entities;
using ZadanieRekrutacyjneInsERT.Core.Interfaces;
using ZadanieRekrutacyjneInsERT.Server.Controllers;
using ZadanieRekrutacyjneInsERT.Server.Dtos;

namespace ZadanieRekrutacyjneInsERT.Server.Tests.Controllers
{
    [TestFixture]
    public class CurrenciesControllerTests
    {
        private Mock<IBaseRepository<ExchangeRate, int>> _exchangeRateRepoMock;
        private Mock<INBPClient> _NBPClientMock;
        private Mock<IMapper> _mapperMock;
        private CurrenciesController _controller;

        [SetUp]
        public void Setup()
        {
            _exchangeRateRepoMock = new Mock<IBaseRepository<ExchangeRate, int>>();
            _NBPClientMock = new Mock<INBPClient>();
            _mapperMock = new Mock<IMapper>();
            _controller = new CurrenciesController(_NBPClientMock.Object, _mapperMock.Object, _exchangeRateRepoMock.Object);
        }

        [TearDown]
        public void Teardown()
        {
            _controller.Dispose();
        }

        [Test]
        public async Task GetExchangeRates_NoExchangeRates_CallNBPClient()
        {
            _exchangeRateRepoMock.Setup(repo => repo.GetAllAsync(It.IsAny<Expression<Func<ExchangeRate, bool>>>()))
                .ReturnsAsync(new List<ExchangeRate>());
            _mapperMock.Setup(m => m.Map<IEnumerable<ExchangeRateDto>>(It.IsAny<IEnumerable<ExchangeRate>>())).Returns(It.IsAny<IEnumerable<ExchangeRateDto>>());
            _NBPClientMock.Setup(client => client.GetExchangeRatesAsync()).ReturnsAsync(new List<NBPExchangeRateDto>()).Verifiable();
            var result = await _controller.GetExchangeRates();

            _NBPClientMock.Verify();
        }

        [Test]
        public async Task GetExchangeRates_NBPClientThrowsHttpRequestException_ReturnStatusCode()
        {
            var exception = new HttpRequestException("", null, HttpStatusCode.BadRequest);
            _exchangeRateRepoMock.Setup(repo => repo.GetAllAsync(It.IsAny<Expression<Func<ExchangeRate, bool>>>()))
                .ReturnsAsync(new List<ExchangeRate>());
            _NBPClientMock.Setup(client => client.GetExchangeRatesAsync()).ThrowsAsync(exception);

            var result = (await _controller.GetExchangeRates()).Result as ObjectResult;

            Assert.That(result, Is.Not.Null);
            Assert.That((HttpStatusCode)result.StatusCode, Is.EqualTo(exception.StatusCode));
        }

        [Test]
        public async Task GetExchangeRates_NBPClientThrowsException_ReturnBadRequest()
        {
            var exception = new Exception();
            _exchangeRateRepoMock.Setup(repo => repo.GetAllAsync(It.IsAny<Expression<Func<ExchangeRate, bool>>>()))
                .ReturnsAsync(new List<ExchangeRate>());
            _NBPClientMock.Setup(client => client.GetExchangeRatesAsync()).ThrowsAsync(exception);

            var result = (await _controller.GetExchangeRates()).Result as ObjectResult;

            Assert.That(result, Is.Not.Null);
            Assert.That((HttpStatusCode)result.StatusCode, Is.EqualTo(HttpStatusCode.BadRequest));
        }

        [Test]
        public async Task GetExchangeRates_ExchangeRatesAvailable_ReturnOkWithExchangeRates()
        {
            var exchangeRates = GetDummyExchangeRates();
            _exchangeRateRepoMock.Setup(repo => repo.GetAllAsync(It.IsAny<Expression<Func<ExchangeRate, bool>>>()))
                .ReturnsAsync(exchangeRates);
            _mapperMock.Setup(m => m.Map<IEnumerable<ExchangeRateDto>>(It.IsAny<IEnumerable<ExchangeRate>>())).Returns(GetDummyExchangeRatesDto());
            
            var result = (await _controller.GetExchangeRates()).Result as ObjectResult;

            Assert.IsInstanceOf<OkObjectResult>(result);
            var okResult = (OkObjectResult)result;
            Assert.IsInstanceOf<List<ExchangeRateDto>>(okResult.Value);
            Assert.AreEqual(exchangeRates.Count, ((List<ExchangeRateDto>)okResult.Value).Count);
        }

        private List<ExchangeRate> GetDummyExchangeRates()
        {
            return new List<ExchangeRate> 
            { 
                new ExchangeRate 
                { 
                    Code = "EUR",
                    Currency = "Euro",
                    Mid = 4.33M
                },
                new ExchangeRate
                {
                    Code = "USD",
                    Currency = "Dolar amerykañski",
                    Mid = 4.02M
                },
            };
        }

        private List<ExchangeRateDto> GetDummyExchangeRatesDto()
        {
            return new List<ExchangeRateDto>
            {
                new ExchangeRateDto
                {
                    Code = "EUR",
                    Currency = "Euro",
                    Mid = 4.33M
                },
                new ExchangeRateDto
                {
                    Code = "USD",
                    Currency = "Dolar amerykañski",
                    Mid = 4.02M
                },
            };
        }
    }
}