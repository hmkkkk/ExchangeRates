using Microsoft.VisualStudio.TestPlatform.ObjectModel;
using ZadanieRekrutacyjneInsERT.Server.Helpers;

namespace ZadanieRekrutacyjneInsERT.Server.Tests.Helpers
{
    [TestFixture]
    public class ExchangeRatesHelpersTests
    {

        [Test]
        [TestCase(2,1,100, TestName = "CalculateRateDifference_WhenValueDoubles_Return100Percent")]
        [TestCase(1,2,-50, TestName = "CalculateRateDifference_WhenValueHalves_ReturnNegative50Percent")]
        [TestCase(1,0,0, TestName = "CalculateRateDifference_PastIsZero_ReturnZero")]
        [TestCase(1,1,0, TestName = "CalculateRateDifference_WhenValueIsIdentical_ReturnZero")]
        public void CalculateRateDifference_WhenCalled_ReturnDifferencePercentage(decimal current, decimal past, decimal expectedResult)
        {
            var result = ExchangeRatesHelpers.CalculateRateDifference(current, past);

            Assert.AreEqual(expectedResult, result);
        }
    }
}
