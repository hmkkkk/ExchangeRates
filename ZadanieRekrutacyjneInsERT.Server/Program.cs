using ZadanieRekrutacyjneInsERT.Server.Clients;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddSingleton<INBPClient, NBPClient>();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseCors(configurePolicy => configurePolicy.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:5173"));
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapControllers();

//app.MapFallbackToFile("/index.html");

app.Run();
