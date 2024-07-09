using System.Net;

namespace Journey.Exception.ExceptionsBase
{
    public class ErronOnValidationException : JourneyException
    {
        public ErronOnValidationException(string message) : base(message)
        {
        }

        public override HttpStatusCode GetStatusCode()
        {
            return HttpStatusCode.BadRequest;
        }
    }
}
