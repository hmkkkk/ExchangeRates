using Microsoft.EntityFrameworkCore;
using ZadanieRekrutacyjneInsERT.Core.Interfaces;
using ZadanieRekrutacyjneInsERT.Infrastructure.Data;
using ZadanieRekrutacyjneInsERT.Server.Clients;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddSingleton<INBPClient, NBPClient>();
builder.Services.AddScoped(typeof(IBaseRepository<,>), typeof(BaseRepository<,>));
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddDbContext<DataContext>(o => o.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseCors(configurePolicy => configurePolicy
        .AllowAnyHeader().AllowAnyMethod().WithOrigins(builder.Configuration["ClientUrl"] ?? throw new Exception("[ClientUrl] variable missing in configuration")));
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapControllers();

//app.MapFallbackToFile("/index.html");

app.Run();
